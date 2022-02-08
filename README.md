# Nft Minter App
The NFT Minter app is a easy to use personal web application for minting and posting of personal artwork in the use case of crafting NFT's

### Compatibility
#### Dependencies
    
    node.js:
        - react
        - react-router-dom  
        - axios
    
    python3:
        - requests
        - passlib

    bash or some 'sh' execution platform

#### Supported OS's

    - All Linux Systems with the dependencies installed
    - All MacOS Systems with the dependencies installed
    - All Windows 10 or 11 devices with WSL 1 or WSL 2 installed with the dependecies

#### Mobile Access
Mobile users can access the application through a web browser only if the application has been deployed either through a local webserver such nginx or appache, or on a cloud system such as aws or linode
The application is being built with mobile support in mind for those who are willing to go through the process

### How does this work
The NFT Minter app is a React Web Application with a Rest Api backend its primary purpose is to simplify the process of generating your own NFT's and posting them to the OpenSea marketplace

### Setup And Running the App
##### The setup is simple just run the following command
**Warning this will erase all data within the application if run after initial setup!**
```console
foo@bar:~$ python3 setup.py
```
Within the setup script you will be prompted set the root_users username and password, as well as all the information needed to connect to your OpenSea account and crypto wallet

##### To run the application run the following command
```console
foo@bar:~$ python3 run.py
```

### Stored Data

Instead of using a SQL database system I have opted to make this service for private use, therefore, each instance of the application will only contain one user setup within the "setup.py" script

All data is stored within a json file named "settings.json" this file is located within the "nft_minter_api" directory

The data being stored is the secret key, the root users username and password, the data required for connecting to the OpenSea service and your crypto wallet data

### WARNING BEFORE USE

***As a fair warning we do not encourage people to release their private copy of this repository on a public or private repository system such as GitHub as to not comprimise your personal information, we also do not encourage you to use a publicly hosted web service to host your copy of the software and insist you keep this in a secure local environment for your own personal use only. In esence try not to make it possible for a potential attacker to get your information***

**WE ARE NOT RESPONSIBLE FOR ANY DATA THAT MAY BE COMPROMISED WITHIN YOUR PRIVATE/PERSONAL COPY OF THE SOFTWARE AND HOPE YOU TAKE THE NEEDED MEASURES TO ENSURE YOUR INFORMATION IS SECURE**


