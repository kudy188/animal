import os
import json
import requests
from pathlib import Path

# Create directories for assets
def create_asset_dirs():
    Path("../public/images").mkdir(parents=True, exist_ok=True)
    Path("../public/sounds").mkdir(parents=True, exist_ok=True)
    Path("../src/data").mkdir(parents=True, exist_ok=True)

# Animal data
ANIMALS = [
    {
        "id": 1,
        "name_jp": "ライオン",
        "name_en": "Lion",
        "description": "アフリカに生息する大型肉食獣で、「百獣の王」と呼ばれる",
        "image_query": "lion animal",
        "sound_url": "https://assets.mixkit.co/active_storage/sfx/2136/2136.wav"
    },
    {
        "id": 2,
        "name_jp": "ゾウ",
        "name_en": "Elephant",
        "description": "地球上最大の陸上動物で、長い鼻を持つことで知られる",
        "image_query": "elephant animal",
        "sound_url": "https://assets.mixkit.co/active_storage/sfx/1183/1183.wav"
    },
    {
        "id": 3,
        "name_jp": "キリン",
        "name_en": "Giraffe",
        "description": "世界一背の高い陸上動物で、特徴的な模様を持つ",
        "image_query": "giraffe animal",
        "sound_url": "https://assets.mixkit.co/active_storage/sfx/1373/1373.wav"
    },
    {
        "id": 4,
        "name_jp": "パンダ",
        "name_en": "Panda",
        "description": "中国原産の希少な動物で、竹を主食とする",
        "image_query": "panda bear",
        "sound_url": "https://assets.mixkit.co/active_storage/sfx/1371/1371.wav"
    },
    {
        "id": 5,
        "name_jp": "トラ",
        "name_en": "Tiger",
        "description": "アジアに生息する大型ネコ科動物で、縞模様が特徴",
        "image_query": "tiger animal",
        "sound_url": "https://assets.mixkit.co/active_storage/sfx/2135/2135.wav"
    },
    {
        "id": 6,
        "name_jp": "カンガルー",
        "name_en": "Kangaroo",
        "description": "オーストラリアを代表する有袋類で、跳躍力が特徴",
        "image_query": "kangaroo animal",
        "sound_url": "https://assets.mixkit.co/active_storage/sfx/1372/1372.wav"
    },
    {
        "id": 7,
        "name_jp": "ペンギン",
        "name_en": "Penguin",
        "description": "南極に生息する飛べない鳥で、水中での泳ぎが得意",
        "image_query": "penguin animal",
        "sound_url": "https://assets.mixkit.co/active_storage/sfx/2205/2205.wav"
    },
    {
        "id": 8,
        "name_jp": "コアラ",
        "name_en": "Koala",
        "description": "オーストラリアに生息する有袋類で、ユーカリの葉を主食とする",
        "image_query": "koala animal",
        "sound_url": "https://assets.mixkit.co/active_storage/sfx/1370/1370.wav"
    },
    {
        "id": 9,
        "name_jp": "キツネ",
        "name_en": "Fox",
        "description": "世界中に生息する小型の肉食獣で、賢い動物として知られる",
        "image_query": "fox animal",
        "sound_url": "https://assets.mixkit.co/active_storage/sfx/1369/1369.wav"
    },
    {
        "id": 10,
        "name_jp": "フクロウ",
        "name_en": "Owl",
        "description": "夜行性の猛禽類で、首が大きく回転することで知られる",
        "image_query": "owl bird",
        "sound_url": "https://assets.mixkit.co/active_storage/sfx/2204/2204.wav"
    }
]

def get_unsplash_image(query):
    # For development, we'll use placeholders instead of Unsplash API
    return None

def download_file(url, filepath):
    try:
        response = requests.get(url)
        response.raise_for_status()
        with open(filepath, 'wb') as f:
            f.write(response.content)
        return True
    except Exception as e:
        print(f"Error downloading {url}: {str(e)}")
        return False

def download_assets():
    for animal in ANIMALS:
        # Handle image download/placeholder
        image_path = f"../public/images/{animal['name_en'].lower()}.jpg"

        # Try to get image from Unsplash (currently disabled)
        image_url = get_unsplash_image(animal['image_query'])
        if image_url and download_file(image_url, image_path):
            print(f"Downloaded image for {animal['name_en']}")
        else:
            # Use placeholder if Unsplash fails
            placeholder_url = f"https://placehold.co/600x400/random/white?text={animal['name_en']}"
            if download_file(placeholder_url, image_path):
                print(f"Created placeholder image for {animal['name_en']}")
            else:
                print(f"Failed to create placeholder for {animal['name_en']}")

        # Handle sound download
        sound_path = f"../public/sounds/{animal['name_en'].lower()}.wav"
        if download_file(animal['sound_url'], sound_path):
            print(f"Downloaded sound for {animal['name_en']}")
        else:
            print(f"Failed to download sound for {animal['name_en']}")
            # Create empty sound file as fallback
            with open(sound_path, 'wb') as f:
                f.write(b'')
            print(f"Created empty sound file for {animal['name_en']}")

def export_animal_data():
    # Export animal data as TypeScript interface and constant
    ts_content = """
export interface Animal {
    id: number;
    name_jp: string;
    name_en: string;
    description: string;
    image_path: string;
    sound_path: string;
}

export const ANIMALS: Animal[] = [
    """ + ",\n    ".join([
        f"""{{
        id: {animal['id']},
        name_jp: "{animal['name_jp']}",
        name_en: "{animal['name_en']}",
        description: "{animal['description']}",
        image_path: "/images/{animal['name_en'].lower()}.jpg",
        sound_path: "/sounds/{animal['name_en'].lower()}.wav"
    }}""" for animal in ANIMALS
    ]) + "\n];"

    with open("../src/data/animals.ts", "w", encoding="utf-8") as f:
        f.write(ts_content)

if __name__ == "__main__":
    create_asset_dirs()
    download_assets()
    export_animal_data()
