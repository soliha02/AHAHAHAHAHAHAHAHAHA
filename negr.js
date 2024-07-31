let man = document.getElementById('h1')
let san = document.getElementById('input')
let ham = document.getElementById('btn')

ham.addEventListener('click', ()=>{
    localStorage.setItem('name', ham.value)
    
    man.innerHTML = localStorage.getItem('name')

    man.innerHTML = san.value
})


localStorage.setItem('name', ham.value)
    






