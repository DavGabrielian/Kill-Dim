saveData = () => {
    // let section = document.getElementById("game");
    // section.scrollIntoView({behavior: 'smooth'});
    let input = document.getElementById('username');
    sessionStorage.setItem("username",input.value);

    const state = input.value;
    const title = ''
    const url = 'game.html'

    history.pushState(state, title, url)
    window.location.href = "game.html";
    console.log(input.value)
}

let count = 0;
let counterDisplay = document.querySelector('.counter-display');
let counterMinus = document.querySelector('.counter-minus');
let counterPlus = document.querySelector('.counter-plus');

updateDisplay();

counterPlus.addEventListener("click",()=>{
    count++;
    updateDisplay();
});

counterMinus.addEventListener("click",()=>{
    if (count>0) {
        count--;
        updateDisplay();
    }
});

function updateDisplay(){
    counterDisplay.innerHTML = count;
};