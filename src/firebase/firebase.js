import app from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return await newUser.user.updateProfile({
      displayName: name,
    });
  }

  async signIn(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async signInWithGoogle() {
    const provider = await new app.auth.GoogleAuthProvider();
    return await this.auth.signInWithPopup(provider);
  }

  async signOut() {
    await this.auth.signOut();
  }

  async resetPassword(email) {
    await this.auth.sendPasswordResetEmail(email);
  }
}

const firebase = new Firebase();
export default firebase;
