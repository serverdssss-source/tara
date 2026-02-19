import json
import os
import subprocess
import sys

# Constants
DEPLOYMENT_ID = "dpl_7kqgini45EoGvhf6fd3PHxS5KBm9"
TEAM_ID = "team_DYL5VYwAns0vbj31YxlV8lIf"
FILE_LIST_PATH = "file_list.json"
OUTPUT_DIR = "recovered_source"

def run_vercel_api(path):
    cmd = ["vercel", "api", f"{path}?teamId={TEAM_ID}"]
    result = subprocess.run(cmd, capture_output=True)
    if result.returncode != 0:
        print(f"Error fetching {path}: {result.stderr.decode()}", file=sys.stderr)
        return None
    return result.stdout

def process_items(items, current_path):
    for item in items:
        name = item['name']
        item_path = os.path.join(current_path, name)
        
        if item['type'] == 'directory':
            os.makedirs(item_path, exist_ok=True)
            if 'children' in item:
                process_items(item['children'], item_path)
        elif item['type'] == 'file':
            uid = item['uid']
            print(f"Downloading {item_path} ({uid})...")
            content = run_vercel_api(f"/v2/now/files/{uid}")
            if content is not None:
                with open(item_path, 'wb') as f:
                    f.write(content)
            else:
                print(f"Failed to download {item_path}")

def main():
    if not os.path.exists(FILE_LIST_PATH):
        print(f"Error: {FILE_LIST_PATH} not found.")
        return

    with open(FILE_LIST_PATH, 'r', encoding='utf-8-sig') as f:
        try:
            content = f.read()
            # Find the start of the JSON array
            start_index = content.find('[')
            if start_index != -1:
                file_list = json.loads(content[start_index:])
            else:
                print("Error: Could not find start of JSON array in file.")
                return
        except Exception as e:
            print(f"Error parsing JSON: {e}")
            return

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    process_items(file_list, OUTPUT_DIR)
    print("\nRecovery complete!")

if __name__ == "__main__":
    main()
