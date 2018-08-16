# Firebase

1. Login to or create a [Firebase account](https://firebase.google.com/)
2. Create a new project - eg. "MC2 Client app"
3. Turn on email/password __Authentication__
4. Enable the __Database__ feature, and import the `firebase-sample-data.json` file found in this repo
5. Get the Firebase project's API credentials, and add them to the respective variables in the `/src/constants/firebase.js` file. Simply get the project details from Firebase, by clicking on the cog icon, next to overview > 'Add Firebase to your web app'.
6. Add the following __rules__ to the Database

```json
{
  "rules": {
    ".read": false,
    ".write": false,

    "suggestions": {
      ".read": true
    },

    "todos": {
      ".read": true,
    	".indexOn": ["category"]
    },

    "users": {
      "$uid": {
        ".read": "auth != null && auth.uid == $uid",
        ".write": "auth != null && auth.uid == $uid",

        "firstName": { ".validate": "newData.isString() && newData.val().length > 0" },
        "lastName": { ".validate": "newData.isString() && newData.val().length > 0" },
        "lastLoggedIn": { ".validate": "newData.val() <= now" },
        "signedUp": { ".validate": "newData.val() <= now" },
        "role": {
          ".validate": "(root.child('users/'+auth.uid+'/role').val() === 'admin' && newData.val() === 'admin') || newData.val() === 'user'"
        }
      }
    },

    "favorites": {
    	"$uid": {
      	".read": "auth != null && auth.uid == $uid",
      	".write": "auth != null && auth.uid == $uid"
    	}
  	}
  }
}
```

Check out the [Firebase Cloud Functions](/firebase/README.md)
