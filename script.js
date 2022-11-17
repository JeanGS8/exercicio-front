function handleMove(val){
    if(screen.width > 500){
        let header = document.querySelector(val);
        header.style.transition = "0.5s";
        header.style.backgroundColor = "#584747";
    }
}

function handleOut(val){
    if(screen.width > 500){
        let header = document.querySelector(val);
        header.style.transition = "0.5s";
        header.style.backgroundColor = "#4B3738";
    }
}