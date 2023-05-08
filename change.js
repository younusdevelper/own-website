function reset(){
    document.body.style.backgroundColor = "white"
}

function multicolors(){
    let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
}