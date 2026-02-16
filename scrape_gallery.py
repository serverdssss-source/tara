import os
import requests
import re
import json
from bs4 import BeautifulSoup
from urllib.parse import urljoin

URL = "https://taradentalwellness.com/gallery/"
OUTPUT_DIR = "public/images/gallery"
DEBUG_FILE = "debug_gallery.html"

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

def scrape_images():
    images = set()

    # 1. Fetch from WP Media API (The most reliable way to get all uploads)
    api_url = "https://taradentalwellness.com/wp-json/wp/v2/media?per_page=50"
    print(f"Fetching Media API: {api_url}...")
    
    try:
        resp = requests.get(api_url, headers={"User-Agent": "Mozilla/5.0"})
        if resp.status_code == 200:
            media_items = resp.json()
            print(f"API returned {len(media_items)} media items.")
            
            for item in media_items:
                # Try to get the full size URL
                if 'source_url' in item:
                    images.add(item['source_url'])
                elif 'guid' in item and 'rendered' in item['guid']:
                     images.add(item['guid']['rendered'])
        else:
            print(f"API request failed: {resp.status_code}")
            
    except Exception as e:
        print(f"API fetch failed: {e}")

    # 2. Add any found in local HTML just in case
    if os.path.exists(DEBUG_FILE):
        with open(DEBUG_FILE, "r", encoding="utf-8") as f:
            content = f.read()
            matches = re.findall(r'https?://[^\s"\'<>]+\.(?:jpg|jpeg|png|webp)', content, re.IGNORECASE)
            for url in matches:
                images.add(url)

    print(f"Total unique candidates: {len(images)}")
    
    # Filter and Download
    clean_images = []
    for img_url in images:
        lower_url = img_url.lower()
        if any(x in lower_url for x in ['logo', 'icon', 'leaflet', 'marker', 'avatar', 'blank', 'placeholder', 'elementor-icons']):
            continue
        if 'samrat-residency' in lower_url: 
            continue
        clean_images.append(img_url)

    print(f"Cleaned list contains {len(clean_images)} images.")

    for i, img_url in enumerate(clean_images):
        try:
            ext = img_url.rsplit('.', 1)[1].lower()
            # Handle query params in extension if any
            if '?' in ext:
                ext = ext.split('?')[0]
            
            if ext not in ['jpg', 'jpeg', 'png', 'webp']:
                continue
                
            filename = f"gallery-scraped-{i+1}.{ext}"
            filepath = os.path.join(OUTPUT_DIR, filename)

            # Check if file exists and is larger than 10KB (to avoid re-downloading or overwriting with same)
            # Actually, let's just overwrite to be safe we get the right ones
            print(f"Downloading {img_url} -> {filename}...")
            img_data = requests.get(img_url, headers={"User-Agent": "Mozilla/5.0"}).content
            
            if len(img_data) < 20000: # Skip < 20KB (likely icons or thumbnails)
                print("Skipping small file.")
                continue
                
            with open(filepath, 'wb') as f:
                f.write(img_data)
        except Exception as e:
            print(f"Failed to download {img_url}: {e}")

    print("Done.")

if __name__ == "__main__":
    scrape_images()
