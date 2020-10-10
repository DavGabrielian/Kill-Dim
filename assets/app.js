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

