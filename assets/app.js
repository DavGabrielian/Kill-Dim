saveData = () => {
    let section = document.getElementById("game");
    section.scrollIntoView({behavior: 'smooth'});
    let input = document.getElementById('username');
    sessionStorage.setItem("username",input.value);
    console.log(sessionStorage.getItem("username"))
 return true;
}

