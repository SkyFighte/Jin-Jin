//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";

    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
} 