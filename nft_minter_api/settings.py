'''
    Copyright 2022 by Zackary Morvan, Cyber M Technologies.
    All rights reserved
    This file is part of the NFT MINTER APP, and is released 
    under the "MIT License Agreement". Please see the LICENSE file that 
    should have been included as part of this package
'''

import json

class settings:
    def __init__(self):
        self.settings_file = 'settings.json'
        self.load_settings()

    def load_settings(self):
        with open(self.settings_file, 'r') as json_file:
            self.settings = json.load(json_file)
        return

    def save_settings(self):
        with open(self.settings_file, 'w') as outfile:
            json.dump(self.settings, outfile)
        return

    