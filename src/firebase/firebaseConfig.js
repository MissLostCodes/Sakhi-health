import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCIhlAgG1gIhkXhvZbeXtps5EsZV5EJFmE",
  authDomain: "sakhi-946a8.firebaseapp.com",
  projectId: "sakhi-946a8",
  storageBucket: "sakhi-946a8.firebasestorage.app",
  messagingSenderId: "11744423887",
  appId: "1:11744423887:web:ce00fa6a22e6a16c50ecba",
  measurementId: "G-K47RKFZNL9"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
