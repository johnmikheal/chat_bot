let sendBtn = document.getElementById("sendBtn");
let textbox = document.getElementById("textbox");
let shatcontainer = document.getElementById("shatcontainer");

// possible message
let user = {message:"" , counter:0};    

// chatbotSendMessage("please enter an option:");
// options();

let arrayPossibleMessage = [
    {"message":"how are you?" , "response":"im great" },
    {"message":"hi" , "response":"hi!" },
    {"message":"who are you?" , "response":"im your assistant" },
    {"message":"what is your name?" , "response":"im chatbot" },
    {"message":"what do you do?" , "response":"im help you" },
    {"message":"how old are you ?" , "response":"im age less" },
    {"message":"do you have kids?" , "response":"no idont!" },

    {"message":"do you sleep early?" , "response":"no idont!" },
    {"message":"do you a car?" , "response":"i travel by train" },
    {"message":"can you dance?" , "response":"yes , tango." },
    {"message":"whats your fav food?" , "response":"pizza" },
    {"message":"do you have a jop?" , "response":"yes" },
    {"message":"where do you live?" , "response":"in the web" },
    {"message":"where were you born?" , "response":"naw" },
]

// question to ask 
let questionToAsk = [
    {"question":"how are you?" , "answer":""},
    {"question":"How old are you?" , "answer":""},
    {"question":"what is your jop title?" , "answer":""},
    {"question":"whats your name?" , "answer":""},
    {"question":"where do you live?" , "answer":""},
    {"question":"" , "answer":""},
    {"question":"" , "answer":""},
    {"question":"" , "answer":""},
    {"question":"" , "answer":""},
    {"question":"" , "answer":""},
    {"question":"" , "answer":""},
    {"question":"" , "answer":""},
    {"question":"" , "answer":""},
    {"question":"" , "answer":""},
]


// ask qetsion  
if(questionToAsk.length > 5){ // check to void error

    function askQuestions(){
      setTimeout(function(){
        chatbotSendMessage(questionToAsk[user.counter].question);
        user.counter++;
      },1000);
    
    }

}


// function send message by chatbot
setTimeout(function(){
    chatbotSendMessage("hi, what’s your name ya 3mna? " ) ;
},1000);

// chatbot message
function chatbotSendMessage(messageText){
    let messageElement = document.createElement("div");
    messageElement.classList.add("w-50");
    messageElement.classList.add("float-start");
    messageElement.classList.add("shadow-sm");
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";
   
    messageElement.innerHTML = "<span> chatbot: </span>" +
    "<span style="+"margin-top:10px; padding:10px"+">"+ messageText  + "</span>";

    messageElement.animate([{easing:"ease-in" , opacity:0.4} ,{opacity:1}],{duration:1000});

   
    shatcontainer.appendChild(messageElement);

    //scroll 
    shatcontainer.scrollTop = shatcontainer.scrollHeight; 
}

//function clear value input 
function clearValueInput(){
    textbox.value = "";
}


// function send message by input=messagetext 
function sendMessage(messageText){

 let messageElement = document.createElement("div");
 messageElement.classList.add("w-50");
 messageElement.classList.add("float-end");
 messageElement.classList.add("shadow-sm");
 messageElement.style.margin = "10px";
 messageElement.style.padding = "5px";

 messageElement.innerHTML = "<span> you: </span>" +
 "<span style="+"margin-top:10px; padding:10px"+">"+ messageText  + "</span>";

 messageElement.animate([{easing:"ease-in" , opacity:0.4} ,{opacity:1}],{duration:1000});

 shatcontainer.appendChild(messageElement);
 // scrool last message
 shatcontainer.scrollTop =  shatcontainer.scrollHeight;

};

//answer bot 
function processMessage(){
    //array of results
    // if(user.message > 2 ){ // check message is greatere than 5 character

            let result = arrayPossibleMessage.filter(val=>val.message.includes(user.message.toLowerCase()));
            
            if(result.length > 0){ // becouse not error response
            
                            let response = result[0].response;
            
                            setTimeout(function(){
                                chatbotSendMessage(response + " ya 3mna ");
                            },1000)
            
                    }else{ // understand message 
                        setTimeout(function(){
                                chatbotSendMessage("I dont understand ya Bashaaaa ! ");
                            },1000)
                    }


    // }else if(user.message=="how" || user.message == "who"){
    //     setTimeout(function(){
    //         chatbotSendMessage("?");
    //     },1000)
        
        
    // }
    // else{
    //     setTimeout(function(){
    //         chatbotSendMessage("please send me a complete sentence ya Bashaaa");
    //     },1000)
    // }

}

// options
function options(){
    let option = [
        {Number:1 , choice:"what do you do? "},
        {Number:2 , choice:"What Is Chatbot?"},
    ];
  
    let messageElement = document.createElement("div");
    messageElement.classList.add("w-50");
    messageElement.classList.add("float-start");
    messageElement.classList.add("shadow-sm");
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";
   

    for(let i = 0 ; i <option.length ; i++){
    messageElement.innerHTML += "<br>"+
    "<span style="+"margin-top:10px; padding:10px"+">"+ option[i].Number + " " +option[i].choice  + "</span>";
    }
    messageElement.animate([{easing:"ease-in" , opacity:0.4} ,{opacity:1}],{duration:1000});

   
    shatcontainer.appendChild(messageElement);


}

// assestant respose
function assistantResponse(messageText){
   let userchoice = parseInt(messageText.trim());
   switch(userchoice){
    case 1:
        alert("is a free-to-use AI system. Use it for engaging conversations,gain insights, automate tasks, and witness the future of AI, all in one place.");
       break;
    case 2:
       alert("is a form of generative AI -- a tool that lets users enter prompts to receive humanlike images, text or videos that are created by AI.");
       break;
    default:
        alert("please enter right number!");
   }
}




// btn click
sendBtn.addEventListener("click" , function(e){
    if(textbox.value === ""){
       alert('please type in message');
    }else{
        let messageText = textbox.value;
        user.message = messageText; //acssess message in this function
        sendMessage(messageText);
        processMessage();
        clearValueInput();
        
        
        
        // questionToAsk[user.counter - 1].answer = user.message ; // save answer  
        // askQuestions();
        // assistantResponse(messageText);

    }
});


