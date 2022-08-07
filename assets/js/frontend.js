const firebaseConfig = {
    apiKey: "AIzaSyDPLBYsYU_Mezs7eJnSJB1PMSGJVXs1GxM",
    authDomain: "test-project-crud-a4da5.firebaseapp.com",
    databaseURL: "https://test-project-crud-a4da5-default-rtdb.firebaseio.com",
    projectId: "test-project-crud-a4da5",
    storageBucket: "test-project-crud-a4da5.appspot.com",
    messagingSenderId: "59917663996",
    appId: "1:59917663996:web:59ecb276c741387f8ea179",
    measurementId: "G-BVNNLLF6JQ"
};

firebase.initializeApp(firebaseConfig);

// database Name
var contactFormDB = firebase.database().ref("test-project-crud/myForm");
//Form Name
document.getElementById("myForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var uName = getElementVal("uName");
  var email = getElementVal("email");
  var pass = getElementVal("pass");

  saveMessages(uName, email, pass);
  
  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 2000);
  document.getElementById("myForm").reset();
}

const saveMessages = (uName, email, pass) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    uName: uName,
    email: email,
    pass: pass,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
