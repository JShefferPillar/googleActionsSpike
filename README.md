# To setup actions:

import pillar-voice.zip into google actions

# To deploy everything:

ci/deploy.sh

# To build:
node packages are in dialogFlow and functions directory. You'll need to go into both of those and run npm install.

# To run botium tests:
cd dialogflow
npm run botium-tests
