setInterval(colorChange = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    
    const color = `rgb(${red},${green},${blue})`
    document.body.innerHTML = `<h2> ${color}</h2>`;
    document.body.style.backgroundColor = color
},1000)
