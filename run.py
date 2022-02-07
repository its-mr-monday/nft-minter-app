import os
import sys
import datetime
import time
import pty
import subprocess
import threading

#Class for printing colored text with ANSI escape codes
class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def format_output(output, PROC_FLAGS):
    color = bcolors.OKGREEN
    if PROC_FLAGS['sercive'] == 'flask-api':
        color = bcolors.OKCYAN
    return f"{color} {datetime.datetime.now()} *{PROC_FLAGS['service']}*: {output}{bcolors.ENDC}\n"

def format_error(error, PROC_FLAGS):
    return f"{bcolors.WARNING} {datetime.datetime.now()} !Error in {PROC_FLAGS['service']}!: {error}{bcolors.ENDC}\n"

def log_output(output):
    out = output
    for color in bcolors:
        out.replace(color, '')
    
    with open('logfile.txt', 'a') as f:
        f.write(out)
    return

def print_output(output):
    print(output)
    log_output(output)


def run_react_app(script_path):
    PROC_FLAGS = {
        'service': 'react-app',
        'process': None,
        'process_id': None,
        'thread': None
    }
    cmd = "npm start"

    print_output(format_output('Starting React App', PROC_FLAGS))
    return PROC_FLAGS

def react_process_thread(buffer_pointer):
    thread = None
    return thread

def run_flask_api(script_path):
    PROC_FLAGS = {
        'service': 'flask-api',
        'process': None,
        'process_id': None,
        'thread': None
    }
    run_sh = os.path.join(script_path, 'nft_minter_api', 'run_api.sh')

    print_output(format_output('Starting Flask Rest API', PROC_FLAGS))
    return PROC_FLAGS

def flask_process_thread(buffer_pointer):
    thread = None

    return thread



def kill_thread(PROC_FLAGS):
    try:
        PROC_FLAGS['thread'].join()

    except Exception as e:
        print_output(format_error(e, PROC_FLAGS))

def main():
    prcoesses = {}
    args = sys.argv

if __name__ == "__main__":
    main()