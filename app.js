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
  })

})
