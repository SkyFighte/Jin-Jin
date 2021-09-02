
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCN8MFvK5pj46G-4lXUzWT0sTmdq9PtzmU",
      authDomain: "kwitter-36290.firebaseapp.com",
      databaseURL: "https://kwitter-36290-default-rtdb.firebaseio.com",
      projectId: "kwitter-36290",
      storageBucket: "kwitter-36290.appspot.com",
      messagingSenderId: "238572404536",
      appId: "1:238572404536:web:4e0c56f30835376ee2cbcd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " +user_name+ " ! ";
  function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child("room_name").update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
       
   

  }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot)
       {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot)
        {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("Room name-"+Room_names);
            row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id) '> #"+Room_names+"</div> <hr>";
            document.getElementById("output").innerHTML+=row;
            
            
            //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
} 