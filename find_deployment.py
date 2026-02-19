import json

with open('all_deployments.json', 'r', encoding='utf-16') as f:
    content = f.read()
    # Find the start of the JSON object
    start_index = content.find('{')
    if start_index == -1:
        # Maybe it's an array?
        start_index = content.find('[')
    
    if start_index != -1:
        data = json.loads(content[start_index:])
        for d in data.get('deployments', []):
            uid = d.get('uid', d.get('id', ''))
            url = d.get('url', '')
            if '7kq' in uid or '7kq' in url:
                print(json.dumps(d, indent=2))
    else:
        print("Error: Could not find start of JSON in file.")
