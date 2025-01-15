var input= document.getElementById("user");
var btn =document.getElementById("send");
var chatarea=document.getElementById("chatarea");



function go(){

    var mess =input.value;

var chat =document.createElement("div");

chat.innerHTML=mess;
var br =document.createElement("br");
var logo1 =document.createElement("div");
logo1.id="userpic"
logo1.innerHTML='<img src="free-user-icon-3296-thumb.png" alt="user">';
chatarea.append(logo1);
chat.id="usersend";
chatarea.append(br);
chatarea.append(chat);






//fot bot

var botpic =document.createElement("div");
botpic.id="botpic";
chatarea.append(botpic);
botpic.innerHTML='<img id="bot" src="ai.jpg" alt="Bot">';


var botchat=document.createElement("div");

 botchat.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere, cumque eveniet iste necessitatibus error blanditiis autem laudantium odio provident, vitae eos voluptate nihil quibusdam sunt consectetur praesentium officia placeat?"
 botchat.id="botsend"
chatarea.append(br)
 chatarea.append(botchat);




}

