const circleProgress = document.querySelector(".circle-progress")
const numberOfBreaths = document.querySelector(".breath-input")
const instruction = document.querySelector(".instructions")
const start = document.querySelector(".start")
const breathText = document.querySelector(".breath-text")

let breathLeft = 3;

// selecting number of breaths
numberOfBreaths.addEventListener("change", () => {
  breathLeft = numberOfBreaths.value;
  breathText.innerText = breathLeft;
});


// grow/ shrink circle
const grow = () => {
    circleProgress.classList.add("circle-grow")
    setTimeout(()=> {
        circleProgress.classList.remove("circle-grow")
    }, 8000)
}

const breathUpdate = () => {
    breathLeft--;
    breathText.innerText = breathLeft;
    instruction.innerText = "Breath in"
    setTimeout(()=> {
        instruction.innerText = "Hold breath"
        setTimeout(() => {
          instruction.innerText = "Exhale slowly";
        }, 4000);
    }, 4000)
}

// breathing
const breathingApp = () => {
    const breathingAnimation = setInterval(() => {
        if(breathLeft == 0){
            clearInterval(breathingAnimation)
            instruction.innerText = "Breathing session completed Click Begin to start another session";
            start.classList.remove("button-inactive")
            breathLeft = numberOfBreaths.value;
            breathText.innerText = breathLeft;
            return;
        }
        grow();
        breathUpdate();
    },12000)
}

// start breathing
start.addEventListener('click', () => {
    start.classList.add("button-inactive");
    instruction.innerText = "Get relaxed and ready to begin breathing"
    setTimeout(() => {
      instruction.innerText = "Breathing is about to begin...";
      setTimeout(() => {
        breathingApp();
        grow();
        breathUpdate();
      }, 2000);
    }, 2000);
    
})