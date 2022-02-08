'''
    Copyright 2022 by Zackary Morvan, Cyber M Technologies.
    All rights reserved
    This file is part of the NFT MINTER APP, and is released 
    under the "MIT License Agreement". Please see the LICENSE file that 
    should have been included as part of this package
'''

from flask import Flask, request, jsonify
from flask_cors import CORS
from minter import Minter
from settings import settings
from tokenManager import tokenManager
import base64

# Create the Flask app named 'api'
def create_api():
    api = Flask(__name__)
    CORS(api)
    return api

#Create a instance of the api object
api = create_api()

SettingsManager = settings()
SettingsManager.load_settings()

Mint = Minter()

TokenManager = tokenManager(SettingsManager.settings['secret_key'])


'''     API ROUTES     '''

#LOGIN AND LOGOUT ROUTES

#Login Api Route
@api.route('/api/login', methods=['POST'])
def api_login():
    if request.is_json == False:
        return {'message': 'Request Expects Json Data'}, 400
    data = request.json
    username = data['username']
    password = data['password']
    uid = SettingsManager.check_user(username, password)
    if uid != None:
        token = TokenManager.create_token(uid, username)
        
        return {'message': f"Succesfully logged in as {username}",
                'token': token
                }, 200
    
    return {'message': 'Error invalid username or password!'}, 401



#Logout Api Route
#Will make a token invalid
@api.route('/api/logout', methods=['POST'])


#Minting Routes

#Set Crypto Wallet Address
@api.route('/api/nft/link_wallet', methods=['POST'])

#Upload a Image for Minting
@api.route('/api/nft/upload_image', methods=['POST'])
def nft_upload_image():
    if request.headers.get('Authorization'):
        token = request.headers.get('Authorization')[7:]
        payload = TokenManager.validate_token(token)
        if payload != None:
            if request.is_json == False:
                return {'message': 'Request Expects Json Data'}, 400
            data = request.json
            uid = payload['uid']
            image_name = data['filename']
            image_data = base64.b64decode(data['image']).encode('utf-8')
            image_url = SettingsManager.upload_image(image_name, image_data)
            if image_url != None:
                return {'message': 'Image Uploaded',
                        'image_url': image_url
                        }, 200
            return {'message': 'Error uploading image'}, 400
        return {'message': 'Error invalid token'}, 401

def run_api_debug():
    api.run(debug=True)

def run_api():
    api.run()