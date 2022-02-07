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

    