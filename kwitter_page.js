//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDDOpVno3pHVLT1UB_snijAP8FRRVSrK1U",
    authDomain: "tic-tac-toe-d7be9.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-d7be9-default-rtdb.firebaseio.com",
    projectId: "tic-tac-toe-d7be9",
    storageBucket: "tic-tac-toe-d7be9.appspot.com",
    messagingSenderId: "1063969660040",
    appId: "1:1063969660040:web:5edfb82d6a5ae3c488933d"
    };
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("name",name);
      localStorage.removeItem("room_name",room_name);
      window.location="index.html";
}
function send(){
      message=document.getElementById("input1").value
      firebase.database().ref("room_name").push
      name:user_name
      message:msg
      likes:0
          };
