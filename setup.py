import getpass
import json
import os

def set_settings(script_path):
    settings_file = os.path.join(script_path, 'nft_minter_api', 'settings.json')

    settings = {}
    settings['secret_key'] = getpass.getpass('Enter your secret key: ')
    
    with open(settings_file, 'w') as outfile:
        json.dump(settings, outfile)
    
    return settings

def create_images_dir(script_path):
    nft_images_dir = os.path.join(script_path, 'nft_minter_api', 'nft_images')
    if not os.path.exists(nft_images_dir):
        os.mkdir(nft_images_dir)
    return 0

def main():
    script_path = os.path.dirname(os.path.realpath(__file__))
    set_settings(script_path)
    create_images_dir(script_path)

if __name__ == "__main__":
    main()