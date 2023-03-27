let nombre=document.querySelector('.nombre')
let felizCumple=document.querySelector('.felizCumple')
datos=JSON.parse(localStorage.getItem('misdatos'))
let indice=JSON.parse(localStorage.getItem('indice'))
const devolver=document.getElementById('devolver')

let hoy2=[]
let fechas=[]

let hoy = new Date();

hoy2[0] = new Date().getMonth()+1;
hoy2[1] = new Date().getDate();
fechas=datos.fecha[indice].split('-')

let fecha3=datos.fecha[indice].split('-')

let div1=document.createElement('div')
div1.textContent=datos.nombres[indice]
nombre.append(div1)

let div2=document.createElement('div')
if(datos.felizC[indice]=='si'){
    div2.textContent='feliz cumpleaños'
    felizCumple.append(div2)

}else{
    if(parseInt(hoy2[0])<=parseInt(fechas[1])){
        if( parseInt(hoy2[1])<parseInt(fechas[2])){
            const cumple = new Date(hoy.getFullYear(),fecha3[1]-1,fecha3[2] );
            const diff =Math.abs( (cumple - hoy) /(1000 * 60 * 60 * 24))
            let result=`Faltan ${Math.round(diff)} días para tu cumpleaños`;
            
            div2.textContent=result
            felizCumple.append(div2)
        }
 
    }if(parseInt(hoy2[0])<parseInt(fechas[1]) && parseInt(hoy2[1])>=parseInt(fechas[2])){
        const cumple = new Date(hoy.getFullYear(),fecha3[1]-1,fecha3[2] );
        const diff =Math.abs( (cumple - hoy) /(1000 * 60 * 60 * 24))
        let result=`Faltan ${Math.round(diff)} días para tu cumpleaños`;
        
        div2.textContent=result
        felizCumple.append(div2)
    }
    if(parseInt(hoy2[0])>=parseInt(fechas[1])){
        if(parseInt(hoy2[1])>parseInt(fechas[2])){
            const cumple = new Date(hoy.getFullYear()+1,fecha3[1]-1,fecha3[2] );
            const diff =Math.abs( (cumple - hoy) /(1000 * 60 * 60 * 24))
            let result=`Faltan ${Math.round(diff)} días para tu cumpleaños`;
    
            div2.textContent=result
            felizCumple.append(div2)
        }

    }
    // if(parseInt(hoy2[0])>=parseInt(fechas[1])){
    //     if( parseInt(hoy2[1])<parseInt(fechas[2]) ){
    //         const cumple = new Date(hoy.getFullYear()+1,fecha3[1]-1,fecha3[2] );
    //         const diff =Math.abs( (cumple - hoy) /(1000 * 60 * 60 * 24))
    //         let result=`Faltan ${Math.round(diff)} días para tu cumpleaños`;
    
    //         div2.textContent=result
    //         felizCumple.append(div2)
    //     }

    // }
}
devolver.addEventListener('click',()=>{
    localStorage.setItem('misdatos',JSON.stringify(datos))
    location.href='./index.html'

})
