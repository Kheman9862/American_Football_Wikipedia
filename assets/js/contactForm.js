var firebaseConfig = {
  apiKey: "AIzaSyA4OEUvUFKK-QIdO-k9J7aO0_j6fF3m-L0",
  authDomain: "contactform-fba53.firebaseapp.com",
  databaseURL: "https://contactform-fba53.firebaseio.com",
  projectId: "contactform-fba53",
  storageBucket: "contactform-fba53.appspot.com",
  messagingSenderId: "142176611998",
  appId: "1:142176611998:web:633250b0899db12883958f",
  measurementId: "G-CH6GX2BL6L"
};
firebase.initializeApp(firebaseConfig);

// Referance messages Collection
var messagesRef = firebase.database().ref("messages");

document.getElementById("contactForm").addEventListener("submit", submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();
  // Get values
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  saveMessage(name, company, email, phone, message);

  // Alert

  document.querySelector(".alert").style.display = "block";

  //Hide Alert

  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //clear form
  document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save messages to firebase
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
