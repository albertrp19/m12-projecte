<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAF15a9GtTxLfym2YJyL4IoVsXoRHGb0kc",
    authDomain: "vinilicius-c1a7f.firebaseapp.com",
    projectId: "vinilicius-c1a7f",
    storageBucket: "vinilicius-c1a7f.appspot.com",
    messagingSenderId: "658729958603",
    appId: "1:658729958603:web:4482f3cfcb04eb03dbef4e",
    measurementId: "G-P7ML92WX0B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>