let scissor = document.getElementById("scissor-button")
let rock = document.getElementById("rock-button")
let paper = document.getElementById("paper-button")

// function that changes the photo to rock when the "rock" button is pressed
rock.addEventListener("click", changePicToRock)


function changePicToRock(e){

  document.getElementById("paper-user").style.display = "none"
  document.getElementById("scissor-user").style.display = "none"
  document.getElementById("rock-user").style.display = "block"

}



// function that changes the photo to paper when the "paper" button is pressed
paper.addEventListener("click", changePicToPaper)

function changePicToPaper(e){

  document.getElementById("paper-user").style.display = "block"
  document.getElementById("scissor-user").style.display = "none"
  document.getElementById("rock-user").style.display = "none"
}




// function that changes the photo to scissor when the "scissor" button is pressed

scissor.addEventListener("click", changePicToScissor)

function changePicToScissor(e){

  document.getElementById("paper-user").style.display = "none"
  document.getElementById("scissor-user").style.display = "block"
  document.getElementById("rock-user").style.display = "none"

}