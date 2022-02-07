#!/bin/bash
SCRIPTPATH=$(dirname "$SCRIPT")

VENVPATH=$SCRIPTPATH
VENVPATH+="/venv/bin/activate"

FLASKAPP=$SCRIPTPATH
FLASKAPP+="/api.py"

source $VENVPATH
python3 $FLASKAPP

