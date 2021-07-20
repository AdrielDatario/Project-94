var firebaseConfig = {
      apiKey: "AIzaSyDdx7G9Fe7j-7-PwgABuHLvqIG6znABVj4",
      authDomain: "project-96fb1.firebaseapp.com",
      projectId: "project-96fb1",
      storageBucket: "project-96fb1.appspot.com",
      messagingSenderId: "331043259975",
      appId: "1:331043259975:web:7f48d62b5bf51c17d41362"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      window.location = "index.html";
}
