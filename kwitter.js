function addUser(){
    //create a variable and get the name from the input
    name=document.getElementById("user_name").value;
    //storing in the local storage as a key-value pair
    localStorage.setItem("name",name)
    //changing the location to kwitter_room.html
    //inside the window we need to change the location.
    window.location="kwitter_room.html";
}
