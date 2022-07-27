let counter = 0;
let firstSelection = "";
let secondSelection = "";
let score = 0;
let begin = document.getElementById("begin"); 

const allCard = document.querySelectorAll(".allCards .card");
for (let crd of allCard){
    crd.addEventListener("click", function(event){
        // console.log("You clicked a card");
        crd.classList.add("flipped");
        
        if (counter === 0){
            firstSelection = crd.getAttribute("character");
            counter++; 
        } else {
            secondSelection = crd.getAttribute("character");
            counter = 0;
            
            if (firstSelection === secondSelection){
                const correctCards = document.querySelectorAll(".card[character='" + firstSelection +"']");

                correctCards[0].classList.add("checked"); 
                correctCards[0].classList.remove("flipped"); 
                correctCards[1].classList.add("checked"); 
                correctCards[1].classList.remove("flipped"); 
            } else {
                const incorrectCards = document.querySelectorAll(".card.flipped"); 

                incorrectCards[0].classList.add("wrong");
                incorrectCards[1].classList.add("wrong");

                setTimeout(function(){
                    incorrectCards[0].classList.remove("wrong");
                    incorrectCards[0].classList.remove("flipped");
                    incorrectCards[1].classList.remove("wrong");
                    incorrectCards[1].classList.remove("flipped");
                }, 1000); 
            }
        }
        // console.log(firstSelection);
        // console.log(secondSelection); 

    })
}
