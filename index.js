let red;
let green;
let blue;

setInterval(colorChange = () => {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    color.textContent = `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
},3500)
