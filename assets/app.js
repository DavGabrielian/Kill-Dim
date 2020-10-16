
saveData = () => {

    
    let input = document.getElementById('username');
    sessionStorage.setItem("userName",input.value);
    const state = input.value;
    const title = ''
    const url = 'game.html'

    history.pushState(state, title, url)
    window.location.href = "game.html";

}

let username = sessionStorage.getItem('userName');
document.getElementById('user-name').innerHTML = username+"'s";

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
        removeSheep();
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


let imgArr = [];

addSheep = () =>{
    imgArr.push('assets/images/sheep01.png');
    cage.innerHTML='';
    imgArr.forEach(image=> {   
        let img = document.createElement('span'); 
        img.setAttribute('id', 'sheep');
        cage.appendChild(img);        
    });
    console.log(imgArr)
}

removeSheep = () =>{
    imgArr.pop();
    let img = document.getElementById('sheep');
    img.remove()

    console.log(imgArr)
}