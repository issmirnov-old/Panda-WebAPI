#!/bin/bash
# Test script to ssh into carbon and execute an apple script. 

ARGS=${*:1}

echo "arguments to music script: $ARGS"

ssh -t vania@carbon -T <<EOF
osascript bin/panda-scripts/music.scpt $ARGS
EOF
