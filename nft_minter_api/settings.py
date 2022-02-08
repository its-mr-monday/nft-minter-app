'''
    Copyright 2022 by Zackary Morvan, Cyber M Technologies.
    All rights reserved
    This file is part of the NFT MINTER APP, and is released 
    under the "MIT License Agreement". Please see the LICENSE file that 
    should have been included as part of this package
'''

import json
import random
from passlib.hash import sha256_crypt

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

    def check_user(self, username, password):
        if username in self.settings["users"]:
            if sha256_crypt.verify(password, self.settings["users"][username]["password"]):
                return self.settings["users"][username]["user_id"]
        return None

    def set_root_user(self, username, password):
        self.settings["users"]["root_user"]["username"] = username
        self.settings["users"]["root_user"]["password"] = sha256_crypt.encrypt(password)
        self.save_settings()

    def register_user(self, username, password):
        if username in self.settings["users"]:
            return None
        user_id = len(self.settings["users"]) + 1

        self.save_settings()

    
    
