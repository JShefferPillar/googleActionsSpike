# To deploy everything:
go here: https://cloud.google.com/docs/authentication/getting-started and download a key as a json

```
export GOOGLE_APPLICATION_CREDENTIALS=<YOUR_CREDENTIALS_FILE_PATH>.json
```

```
ci/deploy.sh
```

# To build:
node packages are in dialogFlow and functions directory. You'll need to go into both of those and run npm install.

# To run botium tests:

```
cd dialogflow
npm run botium-tests
```
