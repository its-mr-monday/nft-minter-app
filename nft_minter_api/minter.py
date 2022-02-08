'''
    Copyright 2022 by Zackary Morvan, Cyber M Technologies.
    All rights reserved
    This file is part of the NFT MINTER APP, and is released 
    under the "MIT License Agreement". Please see the LICENSE file that 
    should have been included as part of this package
'''

import os
import requests
import json
import time
import datetime

class Minter:
    def __init__(self, settings):
        self.nft_images = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'nft_images')
        self.settings = settings

    
