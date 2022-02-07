import os
import requests
import json
import time
import datetime

class Minter:
    def __init__(self):
        self.nft_images = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'nft_images')
