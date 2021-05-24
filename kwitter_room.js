
//ADD YOUR FIREBASE LINKS HERE
       
var firebaseConfig = {
      apiKey: "AIzaSyAiMVjEDcGI3IfDZn8ayKzWZgbP6hhQeIg",
      authDomain: "kwitter-project-2-7f460.firebaseapp.com",
      databaseURL: "https://kwitter-project-2-7f460-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-2-7f460",
      storageBucket: "kwitter-project-2-7f460.appspot.com",
      messagingSenderId: "637457434662",
      appId: "1:637457434662:web:8c5c5fbb218225848e7ee7"
    };

    firebase.initializeApp(firebaseConfig);

    function addROOM(){
      save_name = document.getElementById("user_name").value;

      firebase.database().ref("/").child(user_name).update({
        My_breakfast : "Dosa",
        My_lunch : "Dal and Rice"
    });

      localStorage.setItem("user_name" , save_name);

  }