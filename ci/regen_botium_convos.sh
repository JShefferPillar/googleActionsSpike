#!/bin/bash
export BOTIUM_CONVOS="$PWD"/tests/botium/convos
export BOTIUM_CONFIG="$PWD"/tests/botium/botium.json
botium-cli import dialogflow-conversations  -c $BOTIUM_CONFIG -C $BOTIUM_CONVOS
