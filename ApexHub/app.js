function register(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email,password)
  .then(()=> alert("Registered Successfully"))
  .catch(err=> alert(err.message));
}

function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email,password)
  // .then(()=> window.location="admin.html")
  // .catch(err=> alert(err.message));
  .then(function(){
    alert("Login Successful");
    window.location.href = "next.html";
  })
  .catch(function(error){
  alert(error.message);
  console.log(error);
    });
  
}
function sendMessage(){
  const msg = document.getElementById("message").value;

  database.ref("messages").push({
    text: msg
  });
}

database.ref("messages").on("value", snapshot=>{
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML = "";

  snapshot.forEach(child=>{
    chatBox.innerHTML += "<p>"+child.val().text+"</p>";
  });
});
auth.onAuthStateChanged(user=>{
    if(user){
        if(user.email ==="rajsahu062006@gmail.com"){
            window.location = "admin.html";
            // console.log("Admin logged in");
        }else{
            window.location = "index.html";
        }
    }
});
auth.onAuthStateChanged(function(user){
    if(!user){
        window.location = "login.html";
    }
})
document.getElementById("loader").style.display = "block";
