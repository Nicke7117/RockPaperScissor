// objects for every button

const buttonValues = [
  { title: "rock", values: ["block", "none", "none"] },
  { title: "paper", values: ["none", "block", "none"] },
  { title: "scissor", values: ["none", "none", "block"] },
];

// loop through every object
buttonValues.forEach(function(item){
  //create eventlistener
  let btn = document.getElementById(item.title + "-button")
  btn.addEventListener("click", function(e){
    //depending on the object the images will get different display attribute
    console.log(item)
    document.getElementById("rock-user").style.display = item.values[0]
    document.getElementById("paper-user").style.display = item.values[1]
    document.getElementById("scissor-user").style.display = item.values[2]
    document.getElementById("user-answer").textContent = item.title
  })

})

let submitBtn = document.getElementById("submit-btn")

submitBtn.addEventListener("click", runEvent)

function runEvent(e){

  e.preventDefault()
  let botText = document.getElementById("bot-answer")
  let rockButton = document.getElementById("rock-button")
  let scissorButton = document.getElementById("scissor-button")
  let paperButton = document.getElementById("paper-button")

  console.log("submitbtn")
  let rps = ["rock", "paper", "scissor"]
  let botAnswer = rps[Math.floor(Math.random() * rps.length)]
  botText.textContent = botAnswer
  console.log(botAnswer)
  console.log(paperButton.checked)
  console.log(botAnswer === paperButton)
  if(paperButton.checked && botAnswer === "rock"){
    document.getElementById("result").textContent = "You win!"
    
  } else if (rockButton.checked && botAnswer === "scissor"){
    document.getElementById("result").textContent = "You win!"
  } else if (rockButton.checked && botAnswer === "rock" || paperButton.checked && botAnswer === "paper" || scissorButton.checked && botAnswer === "scissor"){
    document.getElementById("result").textContent = "Draw!"
  } else if (scissorButton.checked && botAnswer === "paper"){
    document.getElementById("result").textContent = "You win!"
  } else {
    document.getElementById("result").textContent = "You lose!"
  }
  
  //add class to every element
/*   for(let i = 0; i < imgs; i++){

    imgs[i].classList.add("image-loop")
    imgs2[i].classList.add("image-loop")

  } */

  
  

}