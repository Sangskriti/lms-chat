function toggleChatbot() {
    var chatBot = document.getElementById("chatBot");
    if (chatBot.style.display === "none" || chatBot.style.display === "") {
        chatBot.style.display = "block";
    } else {
        chatBot.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    var chatBot = document.getElementById("chatBot");
    chatBot.style.display = "none"; // Initially hide the chatbot
});

function talk(){
    var know = {
    "Hello" : "Hi , tell me how can i assist you?",
    "How are you" : "Good :)",
    "How many courses are there in web-development" : "there are many courses as like html,css, javascript, bootstrap",
    "Tell me about web-dev courses" : "https://www.geeksforgeeks.org/web-development/",
    "can i get peojects about web-dev" : "https://www.geeksforgeeks.org/web-development-projects/",
    "can i get easy-hard questions, projects all about" : "Yes, of course",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! bye bye"
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }