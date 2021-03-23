var admin = require("firebase-admin");

// STEPS ARE HERE https://firebase.google.com/docs/admin/setup#windows

// The private key file is in the same folder but I have placed it in .gitignore
// I can always generate another private key and use that IF I loose this one
var serviceAccount = require("./rm2000app-firebase-adminsdk-93cvg-7977f045fd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rm2000app.firebaseio.com",
});

// r@r.com - the uid is BryybVXvhcS25cZ0BRxLbm5yEBz1
admin
  .auth()
  .setCustomUserClaims("BryybVXvhcS25cZ0BRxLbm5yEBz1", { admin: true })
  .then(() => {
    // The new custom claims will propagate to the user's ID token the
    // next time a new one is issued.
    console.log("Added custom claim. Done");
  })
  .catch((e) => {
    console.log("Error", e, "DONE");
  });
