
// Firebase 設定
const firebaseConfig = {
  apiKey: "AIzaSyDNyYwSsfzRQjF5xQ_ITxRML-oz1sxxmOM",
  authDomain: "ai-classroom-2025-fast.web.app",
  projectId: "ai-classroom-2025"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "course.html";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "登入錯誤：" + error.message;
    });
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "course.html";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "註冊錯誤：" + error.message;
    });
}
