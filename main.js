// Firebase 設定
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNyYwSsfzRQjF5xQ_ITxRML-oz1sxxmOM",
  authDomain: "ai-classroom-2025-fast.web.app",
  projectId: "ai-classroom-2025"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "course.html";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "登入失敗：" + error.message;
    });
};

window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "course.html";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "註冊失敗：" + error.message;
    });
};
