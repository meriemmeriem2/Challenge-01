let cel2far = (event) => { 
    let celsius = event.target.value 
    let farhenheit = (celsius *9/5) +32 
    let convert = document.querySelector('#farhenheit') 
    convert.value = farhenheit 
} 
let far2cel = (event) => { 
    let farhenheit = event.target.value 
    let celsius = (farhenheit -32)*5/9 
    let convert = document.querySelector('#celsius') 
    convert.value = celsius 
} 
let container = document.querySelector('.container') 
container.addEventListener('input', function (event) { 
    if (event.target.id === "celsius"){ 
        cel2far (event) 
    }else{ 
        far2cel (event) 
    } 
})

