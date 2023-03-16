// class Persona {
//     nombre
//     peso
//     estatura
//     edad
//     cedula

//     constructor(nombre,peso,estatura,edad,cedula){
//         this.nombre=nombre
//         this.peso=peso
//         this.estatura=estatura
//         this.edad=edad
//         this.cedula=cedula
//     }
//     calcularIMC(){
//         const imc = this.peso/(this.estatura**2)
//         return imc
//     }
//     info(){

//         return `su nombre es ${this.nombre} y su cedula ${this.cedula}`
        
//     }
// }
// const santiago=new Persona('santiago',70,1.65,19,1005256584)
// const sebastian =new Persona('sebastian',75,1.85,20,4156565)
// const sergio=new Persona('sergio',80,1.80,21,120025555)
// const daniela=new Persona('daniela',60,1.50,19,10236520)
// // console.log(santiago.nombre)
// // console.log(santiago.peso)
// // console.log(santiago.estatura)
// // console.log(santiago.edad)
// // console.log(sebastian.nombre)
// // console.log(sebastian.peso)
// // console.log(sebastian.estatura)
// // console.log(sebastian.edad)

// // const IMCSantiago=santiago.calcularIMC()
// // console.log(IMCSantiago)

// // console.log(santiago.info())
// const IMCSebastian=sebastian.calcularIMC()
// const infoSebastian=sebastian.info()
// const IMCSergio=sergio.calcularIMC()
// const infoSergio=sergio.info()

// const IMCdaniela=daniela.calcularIMC()
// const infodaniela=daniela.info()

// console.log(IMCSebastian)
// console.log(infoSebastian)
// console.log(IMCSergio)
// console.log(infoSergio)
// console.log(IMCdaniela)
// console.log(infodaniela)

class Persona{
    cedula
    nombre
    apellido
    fechaN
    edad

    constructor(cedula,nombre,apellido,fechaN,edad){
       this.cedula=cedula
       this.nombre=nombre
       this.apellido=apellido
       this.fechaN=fechaN
       this.edad=edad

    }
    nombreCompleto(){
        let nombreC=this.nombre+' '+this.apellido
        return nombreC
    }
    // cumpleaños(){
    //     if(fechaN==)
    // }
}
let fecha_hoy=new Date().getFullYear()

let guardar=document.getElementById('guardar')
let array=[]
let cont=0
guardar.addEventListener('click',(event)=>{
    event.preventDefault()
    let fechas=fecha.value.split('-')
    
    const persona=new Persona(cedula.value,nombre.value,apellido.value,fecha.value,parseInt(fecha_hoy-fechas[0]))
    console.log(persona.nombreCompleto())
    array.push(persona)
    console.log(array)
})