var firebaseConfig = {
    apiKey: "AIzaSyDO0g8qQk68ikNm0QTUxss2xSPnIt7n6OE",
    authDomain: "lets-chat-app-4.firebaseapp.com",
    databaseURL: "https://lets-chat-app-4-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-4",
    storageBucket: "lets-chat-app-4.appspot.com",
    messagingSenderId: "801437330334",
    appId: "1:801437330334:web:2f0697bfd942ff5e55048f"
  };
  

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
 } });  }); }
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push ({
          name: username,
          message:msg,
          like:0
});

}
