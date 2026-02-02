// const questions=[

//     {
//         question:"What is the capital of france",
//         options:["Berlin","Madrid","Paris","Rome"],
//         correct:2
//     },
//     {
//         question:"What planet is  known as red planet",
//         options:["Earth","Mars","Jupiter","Santrum"],
//         correct:1
//     },
//     {
//         question:"What is 2+2",
//         options:["2","3","4","5"],
//         correct:2
//     },
// ]
// let currentQuestionindex=0;
// const questionElement=document.getElementById("question");
// const optionsElement=document.getElementById("options");
// const nextbtn=document.getElementById("next");
// function loadquestion()
// {
//     const currentQuestion=questions[currentQuestionindex];
//     questionElement.textContent=currentQuestion.question;
//     optionsElement.innerHTML="";
//     currentQuestion.options.forEach((option,index)=>
//     {
//         const button=document.createElement("button");
//         button.classList.add("option")
//         button.textContent=option;
//         optionsElement.appendChild(button);
//         button.onclick=()=>
//         {
//             handleAnswer(index);
//         }
//     })
// }
// function handleAnswer(selectedindex)
// {
//     const currentQuestion=questions[currentQuestionindex]
//     const options=document.getElementsByClassName("option");
//     if(selectedindex===currentQuestion.correct)
//     {
//        options[selectedindex].classList.add("correct");
//     }
//     else
//     {
//         options[selectedindex].classList.add("incorrect");
//         options[currentQuestion.correct].classList.add("right-option");
//     }
//          Array.from(options).forEach((button)=>
//         {
//             button.disabled=true;
//             nextbtn.style.display="block";
//         })
//         nextbtn.addEventListener("click",()=>
//         {
//             currentQuestionindex++;
//             if(currentQuestionindex<options.length)
//             {
//                 loadquestion();
//                 nextbtn.style.display="none";
//             }
//             else
//             {
//             alert("You have completed the task");
//             nextbtn.textContent="Restart";
//             }
//         })
       
// }
// loadquestion();