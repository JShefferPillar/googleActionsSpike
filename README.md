# To deploy everything:
Download credentails from google actions console.
```export=GOOGLE_APPLICATION_CREDENTIALS=<YOUR_CREDENTIALS_FILE_PATH>.json```
```ci/deploy.sh```

# To build:
node packages are in dialogFlow and functions directory. You'll need to go into both of those and run npm install.

# To run botium tests:
```cd dialogflow
npm run botium-tests```
