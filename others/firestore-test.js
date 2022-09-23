//todo: setup firebase and firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBmNKx189_WzrR5Tm-XKOxL1d0swezFsEU",
  authDomain: "vanillajsprojectx.firebaseapp.com",
  projectId: "vanillajsprojectx",
  storageBucket: "vanillajsprojectx.appspot.com",
  messagingSenderId: "298124740383",
  appId: "1:298124740383:web:a065422ab2983f0e24d22a",
  measurementId: "G-BZFV4C2P7W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.querySelector("form");
form.addEventListener("submit", handleForm);

async function handleForm(e) {
  e.preventDefault();

  const elements = Array.from(e.target.elements)
    .filter((el) => el.tagName === "INPUT")
    .map((el) => ({ [el.name]: el.value }));
  const data = Object.assign({}, ...elements);
  console.log(data);
  //todo: save data to firestore
  try {
    const userRef = await addDoc(collection(db, "users"), {
      ...data,
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
    });
    console.log(userRef);
    alert("User added successfully....");
  } catch (error) {
    console.log("An error occurred");
    console.log(error.message);
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  //todo: retrieve documents from firestore
  const snapshots = await getDocs(collection(db, "users"));
  snapshots.forEach((doc) => {
    console.log(doc.data());
  });
});
