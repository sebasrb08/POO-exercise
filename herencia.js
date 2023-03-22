let nombre=document.querySelector('.nombre')
let felizCumple=document.querySelector('.felizCumple')
datos=JSON.parse(localStorage.getItem('misdatos'))
let indice=JSON.parse(localStorage.getItem('indice'))
let hoy2=[]
let fechas=[]

let hoy = new Date();

hoy2[0] = new Date().getMonth();
hoy2[1] = new Date().getDate();
fechas=datos.fecha[indice].split('-')
console.log(hoy2)
console.log(fechas)
let fecha3=datos.fecha[indice].split('-')
fecha3[0]=2023
const cumple = new Date(hoy.getFullYear(),fecha3[1]-1,fecha3[2] );
console.log(cumple)
console.log(hoy)

const diff =Math.abs( (cumple - hoy) /(1000 * 60 * 60 * 24))

console.log(diff)
let result=`Faltan ${Math.round(diff)} días para tu cumpleaños`;



console.log(datos)
console.log(indice)

let div1=document.createElement('div')
div1.textContent=datos.nombres[indice]
nombre.append(div1)

let div2=document.createElement('div')
if(datos.felizC[indice]=='si'){
    div2.textContent='feliz cumpleaños'
    felizCumple.append(div2)

}else{
    if(parseInt(hoy2[0])<parseInt(fechas[1]) || parseInt(hoy2[1])<parseInt(fechas[2])){
    div2.textContent=result
    felizCumple.append(div2)
    }
}

