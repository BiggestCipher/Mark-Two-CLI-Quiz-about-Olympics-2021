var ReadLineSync=require('readline-sync');
Score=0;

function welcome(){
  var UserName= ReadLineSync.question("What is your Name? ");

  console.log("Welcome " + UserName + ", Let's see How much you know about the recently concluded 2021 Olympic Games?")

   console.log("____________________________________")
}



//Array of all the Questions & Answers
var Questions=[{question:"1) In Which Country, Olympics 2021 took place? ",answer:"Japan"},{question:"2) How many Total Medals did India win in Olympics 2021?(Answer in Letters.) ",answer:"Seven"},{question:"3) Who was the Sole Gold Medallist for India in this Olympics? ",answer:"Neeraj Chopra"},{question:"4) Who was the first ever Indian to compete in the sport of Fencing at the Olympic Games? ",answer:"Bhavani Devi"},{question:"5) Which Indian Golf Player finished fourth at the Recent Olympics? ",answer:"Aditi Ashok"}];


function play(question,answer){
  var UserAnswer=ReadLineSync.question(question);
  if(UserAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("You are Right! ");
    Score=Score+1;
    
  }else{console.log("You are Wrong! ");

  }
  console.log("Your Score is "+Score+" !")
  console.log("____________________________________")

}

function game(){
  for (var i=0; i<Questions.length; i++){
    var CurrentQuestion= Questions[i];
    play(CurrentQuestion.question, CurrentQuestion.answer)
  }
}


var str= "High Scores till now are: \n 1) Tanay : 4\n 2) Amey : 3\n"


function ShowScores() {
  console.log("Your Total Score is "+ Score+" !")
  console.log(str);
  console.log("If your Score beats the High Scores, Contact me and I will update it.")
}



welcome();
game();
ShowScores();

