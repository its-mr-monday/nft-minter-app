from flask import Flask, request, jsonify
from flask_cors import CORS
from minter import Minter
from settings import settings



def create_api():
    api = Flask(__name__)
    CORS(api)
    return api

#Create the api object
api = create_api()

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

