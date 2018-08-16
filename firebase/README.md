# Firebase Cloud Functions

MC2 client stack comes with a couple of handy examples, to get us up and running. You can find out what they do by [reading the comments](/firebase-cloud-functions/functions/index.js).

## Deploy

Once the Firebase account + project is setup:

```
# From the /firebase-cloud-functions directory:

# Install the Node dependencies
cd functions && npm i && cd ../

# Install the Firebase-ClI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialise the project
firebase init
```

Easily develop and deploy Firebase functions from this stack :)

[Learn more](https://firebase.google.com/docs/functions/)
