


let quiz = [
  
  {
    id: 1,
    label:
      "____________key makes a command to be executed or moves the cursor to the beginning of another line",
    obj: {
      ques: 2,
      ans: "B",
      opt1: "Shift key",
      opt2: "Enter key",
      opt3: "Scroll bar key",
      opt4: "Esc key",
    },
  },
  {
    id: 2,
    label: "What is the function of the C.P.U?",
    obj: {
      ques: 14,
      ans: "A",
      opt1: "It conducts all the computer operations",
      opt2: "It conducts only ALU operations",
      opt3: "It conducts only memory unit operations ",
      opt4: "None of the above ",
    },
  },
  {
    id: 3,
    label: "V.G.A stands for ___________",
    obj: {
      ques: 3,
      ans: "C",
      opt1: "Versatile graphic adapter",
      opt2: "Visual grape adapter",
      opt3: "Video graphic adapter",
      opt4: "None of the above ",
    },
  },
  {
    id: 4,
    label: "Data or information is stored in the drive in ___________",
    obj: {
      ques: 16,
      ans: "C",
      opt1: "Bets",
      opt2: "Bits",
      opt3: "Bytes",
      opt4: "Megas",
    },
  },
  {
    id: 5,
    label:
      "__________ are used in specialised activities that are dangerous or tedious for humans",
    obj: {
      ques: 5,
      ans: "C",
      opt1: "Computers",
      opt2: "Joystick ",
      opt3: "Robots",
      opt4: "Military weapons",
    },
  },
  {
    id: 6,
    label: "What is a printer?",
    obj: {
      ques: 6,
      ans:
        "B",
      opt1: "It is just a device",
      opt2:
        "It is a device used by a computer to bring out a hard copy of printout results",
      opt3: "It is a photocopier",
      opt4: "All of the above",
    },
  },
  {
    id: 7,
    label: "Where do you connect the monitor to?",
    obj: {
      ques: 7,
      ans: "C",
      opt1: "Monitor",
      opt2: "Mouse ",
      opt3: "System unit",
      opt4: "UPS",
    },
  },
 
];

function run() {
  let totalTime = 100;
  let min = 0;
  let sec = 0;
  let counter = 0;

  let timer = setInterval(function () {
    counter++;
    min = Math.floor((totalTime - counter) / 60);
    sec = totalTime - min * 60 - counter;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    // if (counter == totalTime) {
    //   clearInterval(timer);
    //   check();
    //   let clearTime = document.getElementById("clearTime");
    //   clearTime.style.display = "none";
    // }
  }, 1000)

}
run();
 let allquiz =quiz.sort(function(){
   return 0.5- Math.random()
 })
// let somequestion =slice(0, 3)
let i= 0
function printQuestion() {
  let txt = allquiz[i].label
    document.getElementById("ques").innerHTML = txt;
    document.getElementById("A").innerHTML = allquiz[i].obj.opt1;
    document.getElementById("B").innerHTML = allquiz[i].obj.opt2;
    document.getElementById("C").innerHTML = allquiz[i].obj.opt3;
    document.getElementById("D").innerHTML = allquiz[i].obj.opt4;
    document.getElementById("questionN").innerHTML= i+1 
 
}
printQuestion()

function NextQuestion() {

if (i <allquiz.length - 1) {
  i++;
  printQuestion();
}
}



function previousQuestion() {
if (1 - quiz.length < i && i>0) {
  i--
  printQuestion()
}
  
}



// let score=0
// let wrong =0
// function checkAnswer() {
//   const rbs = document.querySelectorAll('input[name="choice"]');
//   let selectedValue=[]
  
//   for (const rb of rbs) {
//     if(rb.checked){
//      selectedValue.push(rb.id)
//      selectedValue.filter(e=>{
//        if(e.id==rb.id && rb.id==allquiz[i].obj.ans){
//          score++
//          console.log(score)
//        }
//      })
   
//     }
 
//     }

//   }
let score=0
function checkAnswer(e) {
  let  anm =e.id
  trackAnswer=[]
  if (allquiz[i].obj==anm){
 trackAnswer.push(score);
 trackAnswer.filter(e=>{
   if(score= e){
     score++
     console.log(score)
   }
 })
  }
 

  
}