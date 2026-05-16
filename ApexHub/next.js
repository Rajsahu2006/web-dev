firebase.auth().onAuthStateChanged(function(user){
    if(!user){
        alert("Please login first");
        window.location.href = "login.html";
    }
});
//login check
function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email,password)
  .then(()=> {
    alert("Login Successful");
  })
  .catch(err=> alert(err.message));
}
// simple fade animation
window.onload = function(){
    document.body.style.opacity = "1";
}
document.body.style.opacity = "0";
document.body.style.transition = "1s";

window.onload = function(){
    document.body.style.opacity = "1";
}
// live Clock
function updateClock(){
    const now = new Date();

    document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock,1000);
//Section Swich
function showSection(id){
    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.remove("active"));

    document.getElementById(id).classList.add("active");
}
// Dark mode Toggle
document.getElementById("modeToggle").addEventListener("click",function(){
    document.body.classList.contains("dark");
    if(document.body.classList.contains("dark")){
    this.innerText = "Light mode";
    }else{
        this.innerText = "Dark mode";
    }
})
//Change Name
function changeName(){
    const newName = promt("Enter your new name: ");
    if(newName){
        document.querySelector("profile p").innerText =newName;
    }
}
//logout
function logout(){
    localStorage.removeItem("user");
    window.location.href = "Login.html";
};
//Send Message
function sendMessage(){
    // alert("Button working")
    const msg= document.getElementById("massageInput").value;
    const user = firebase.auth().currentUser;
    firebase.database().ref("messages").push({
        text:msg,
        sender:user.email,
        time:Date.now()
    });
    document.getElementById("messageInput").value ="";
    
}
firebase.database().ref("messages").on("child_added", function(snapshot) {

  const data = snapshot.val();
  const user = firebase.auth().currentUser;

  const div = document.createElement("div");
  div.classList.add("message");

  if (data.sender === user.email) {
    div.classList.add("sent");
  } else {
    div.classList.add("received");

    // 🔔 Notification sound
    document.getElementById("notiSound").play();
  }

  const time = new Date(data.time).toLocaleTimeString();

  div.innerHTML = `
    ${data.text}
    <div class="time">${time}</div>
  `;

  document.getElementById("chatBox").appendChild(div);

  // Auto scroll bottom
  document.getElementById("chatBox").scrollTop =
    document.getElementById("chatBox").scrollHeight;
});
// unread counter
let unread = 0;
firebase.database().ref("messages").on("child_added",function(snapshot){
    const data = snapshot.val();
    const user = firebase.auth().currentUser;
    if (data.sender !== user.email) {
        unread++;
        const badge = document.getElementById("badge");
        badge.style.display = "inline";
        badge.innerText = unread;
    }
});

function resetUnread(){
    unread = 0;
     document.getElementById("badge").style.display = "none";
}