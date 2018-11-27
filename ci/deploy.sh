#!/bin/bash -e

cd functions
npm run deploy

cd ../dialogFlow
node deployAgent.js

ci/..