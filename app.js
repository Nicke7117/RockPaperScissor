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
  let imgs = document.getElementsByClassName("image")
  let imgs2 = document.getElementsByClassName("image2")
  let botText = document.getElementById("bot-answer")
  console.log("submitbtn")
  let rps = ["rock", "paper", "scissor"]
  let botAnswer = rps[Math.floor(Math.random() * rps.length)]
  botText.textContent = botAnswer
  console.log(botAnswer)
  
  //add class to every element
/*   for(let i = 0; i < imgs; i++){

    imgs[i].classList.add("image-loop")
    imgs2[i].classList.add("image-loop")

  } */

  
  

}