'''
    Copyright 2022 by Zackary Morvan, Cyber M Technologies.
    All rights reserved
    This file is part of the NFT MINTER APP, and is released 
    under the "MIT License Agreement". Please see the LICENSE file that 
    should have been included as part of this package
'''

import jwt
import datetime

class tokenManager:
    def __init__(self, secret_key):
        self.secret_key = secret_key
        self.token_map = { }

    # Will generate a token for the user
    def create_token(self, user_id, username):

        payload = {
            'expiry': datetime.datetime.utcnow() + datetime.timedelta(days=1),
            'creation': datetime.datetime.utcnow(),
            'uid': user_id,
            'username': username
        }

        token = jwt.encode(payload, self.secret_key, algorithm='HS256')
        self.token_map[token] = payload
        return token

    def validate_token(self, token):
        if token in self.token_map:
            payload = self.token_map[token]
            if payload['expiry'] > datetime.datetime.utcnow():
                return payload
            #If the token has expired delete it
            self.delete_token(token)

        return None

    # Will invalidate the token of the user on logout
    def delete_token(self, token):
        if token in self.token_map:
            self.token_map.remove(token)
            return 0
        return 1

    def clear_cache(self):
        self.token_map = { }
        return 0