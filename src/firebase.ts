import { initializeApp } from "firebase/app";
import "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDKgCvfAu3tj7d3Z_ykT4exMHrKm6or7jc",
  authDomain: "private-poll.firebaseapp.com",
  projectId: "private-poll",
  storageBucket: "private-poll.appspot.com",
  messagingSenderId: "293200024714",
  appId: "1:293200024714:web:88aad5b4530be120a14973",
  measurementId: "G-8W5X3X2RMT",
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
