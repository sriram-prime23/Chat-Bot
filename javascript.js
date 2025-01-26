var input = document.getElementById("user");
var btn = document.getElementById("send");
var chatarea = document.getElementById("chatarea");

function go() {
    // Create user message and append
    var mess = input.value;
    var chat = document.createElement("div");
    chat.innerHTML = mess;
    var br = document.createElement("br");
    var logo1 = document.createElement("div");
    logo1.id = "userpic";
    logo1.innerHTML = '<img src="free-user-icon-3296-thumb.png" alt="user">';
    chatarea.append(logo1);
    chat.id = "usersend";
    chatarea.append(br);
    chatarea.append(chat);

    // Add bot response
    var botpic = document.createElement("div");
    botpic.id = "botpic";
    chatarea.append(botpic);
    botpic.innerHTML = '<img id="bot" src="ai.jpg" alt="Bot">';


    

    var botchat = document.createElement("div");

    var botanim=document.createElement("div");

    var pulli=document.createElement("p")

   

    pulli.id="pulli"

        botanim.append(pulli);

        botanim.id="bani";

        botanim.innerHTML='<span id="pu">...</span>';
   
        chatarea.append(botanim);

    botchat.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, animi voluptates at amet nihil minima assumenda nulla tempore architecto. Perspiciatis, porro animi. Quod enim corrupti eos corporis assumenda rerum praesentium!";
    botchat.id = "botsend";
    chatarea.append(botchat);

    // Auto-scroll to the bottom after each message
    chatarea.scrollTop = chatarea.scrollHeight;

    // Clear the input field
    input.value = "";
}
