from flask import Flask, request, jsonify
from flask_cors import CORS
from minter import Minter
from settings import settings
from tokenManager import tokenManager

# Create the Flask app named 'api'
def create_api():
    api = Flask(__name__)
    CORS(api)
    return api

#Create a instance of the api object
api = create_api()

Settings = settings()
Settings.load_settings()

Mint = Minter()

TokenManager = tokenManager(Settings['secret_key'])


'''     API ROUTES     '''

#LOGIN AND LOGOUT ROUTES

#Login Api Route
@api.route('/api/login', methods=['POST'])
def api_login():
    data = request.json


#Logout Api Route
#Will make a token invalid
@api.route('/api/logout', methods=['POST'])


#Minting Routes



#Account Management

#Set OpenSea Account
@api.route('/api/nft/marketplace/login', methods=['POST'])


def run_api_debug():
    api.run(debug=True)

def run_api():
    api.run()