# Nft Minter
The NFT Minter app is a easy to use personal web application for minting and posting of personal artwork in the use case of crafting NFT's

### Compatibility
#### Dependencies
    
    node.js:
        - react
        - react-router-dom  
        - axios
    - python3
    - bash or some 'sh' execution platform

#### Supported OS's

    - All Linux Systems with the dependencies installed
    - All MacOS Systems with the dependencies installed
    - All Windows 10 or 11 devices with WSL 1 or WSL 2 installed with the dependecies

#### Mobile Access
Mobile users can access the application through a web browser only if the application has been deployed either through a local webserver such nginx or appache, or on a cloud system such as aws or linode
The application is being built with mobile support in mind for those who are willing to go through the process

## How does this work
The NFT Minter app is a React Web Application with a Rest Api backend

## Setup And Running the App
##### The setup is simple just run the following command
*<b>Warning this will erase all data within the application if run after initial setup!</b>*
```console
foo@bar:~$ python3 setup.py
```

##### To run the application run the following command
```console
foo@bar:~$ python3 run.py
```

## Stored Data

Instead of using a SQL database system I have opted to make this service for private use, therefore, each instance of the application will only contain one user setup within the setup.py script

All data is stored within a json file named settings.json this file is located within the "nft_minter_api" directory

The data being stored is the secret key and the root users username and password

## WARNING BEFORE USE

***As a fair warning I do not encourage people to release their private copy of this repository on a public or private repository system such as GitHub as to not comprimise your personal information, instead please keep this in a secure environment for your own personal use. In esence try not to make it possible for a potential attacker to get your information***
