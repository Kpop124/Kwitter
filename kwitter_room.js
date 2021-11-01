var firebaseConfig = {
      apiKey: "AIzaSyDDOpVno3pHVLT1UB_snijAP8FRRVSrK1U",
    authDomain: "tic-tac-toe-d7be9.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-d7be9-default-rtdb.firebaseio.com",
    projectId: "tic-tac-toe-d7be9",
    storageBucket: "tic-tac-toe-d7be9.appspot.com",
    messagingSenderId: "1063969660040",
    appId: "1:1063969660040:web:5edfb82d6a5ae3c488933d"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //get the item from the local storge with the label called name and store in   variable
 user_name=localStorage.getItem("name")
 //show this in the html.
  document.getElementById("user_name").innerHTML="Welcome "+user_name+" !"
  
//add room name
  function addRoom()
{
      //change user_name to roomname
  room_name = document.getElementById("room_namealue;
  firebase.database().ref("/").child(user_name).update({
     
    purpose : "adding user"
  });
}

function logout(){
      localStorage.removeItem("name",name);
      window.location="index.html";
}
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
