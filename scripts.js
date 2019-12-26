
  // Initialize Firebase
  var config = {
   apiKey: "AIzaSyAcqQ4PltHfpuwS5bWPwL-gH23UOkbWbUk",
    authDomain: "vignote-294e3.firebaseapp.com",
    databaseURL: "https://vignote-294e3.firebaseio.com",
    projectId: "vignote-294e3",
    storageBucket: "vignote-294e3.appspot.com",
    messagingSenderId: "1077803965220",
    appId: "1:1077803965220:web:80a6576b0d427593"
  };
  firebase.initializeApp(config);

  // create a collection(NoSQL) (table (SQL)) in our Firabase database
  var notes_data = firebase.database().ref();

document.getElementById("submit").addEventListener('click', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    var note = document.getElementById("note").value;
    saveUser(note);
    document.getElementById("note").value = "";
}
function saveUser(note) {
    var new_data = notes_data.push();
    new_data.set({
        notedata:note,       
    }) 
    
}
var noteread = firebase.database().ref();

noteread.orderByChild("name").on("child_added", function(data) {
   console.log(data.val().notedata);
 //~ document.getElementById("noteshow").innerHTML = data.val().notedata;  
  var node = document.createElement("li");
  node.className="list-group-item";
  var textnode = document.createTextNode(data.val().notedata);
  node.appendChild(textnode);
  document.getElementById("noteshow").appendChild(node);

});

    $(document).ready(function () {
    $('#overlay').fadeIn();
});
$('#enter_key').click(function () {
	var key = $('#secret_key').val();
	if(key=="vig"){
    $('#overlay').fadeOut(200, "linear");
    $('#secret_key').val('');
}
else{
	  $('#overlay').fadeIn();
	}
});
