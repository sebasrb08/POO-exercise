let nombre=document.querySelector('.nombre')

datos=JSON.parse(localStorage.getItem('misdatos'))
console.log(datos)
let div1=document.createElement('div')
div1.textContent=datos[0][1]
nombre.append(div1)
