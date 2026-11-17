const btnElement = document.getElementsByClassName("btn")[0]

btnElement.addEventListener('mouseover', (event) => {
    const xButton = event.pageX - btnElement.offsetLeft;
    const yButton = event.pageY - btnElement.offsetTop;
    
    btnElement.style.setProperty("--xPos", xButton + "px")
    btnElement.style.setProperty("--yPos", yButton + "px")
})