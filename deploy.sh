#!/bin/bash -e

cd functions
npm install
npm run deploy

cd ../dialogFlow
npm install
node deployAgent.js