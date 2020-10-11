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
let counterDisplay = document.getElementById('display');
let counterDisplayModal = document.getElementById('modal-display');
let counterMinus = document.querySelector('.counter-minus');
let counterPlus = document.querySelector('.counter-plus');
let cage = document.querySelector('.cage')

updateDisplay();

counterPlus.addEventListener("click",()=>{
    count++;
    updateDisplay();
    addSheep();
});

counterMinus.addEventListener("click",()=>{
    if (count>0) {
        count--;
        updateDisplay();
    }
});

function updateDisplay(){
    counterDisplay.innerHTML = count;
    counterDisplayModal.innerHTML = count;
    
};

openModal = () =>{
    document.getElementById('modal').style.display='block';
}

closeModal = () =>{
    document.getElementById('modal').style.display='none';
}

addSheep =()=>{
    cage.innerHTML="<img class='sheep' src='assets/images/sheep01.png' alt='sheep' />"
}