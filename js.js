document.querySelector("#button").addEventListener('click',()=>{
    let rotacionSentido = document.querySelector("#cubo").classList
    if(rotacionSentido=="rotacion1"){
        let x =document.querySelector("#cubo").classList.remove("rotacion1")
        let y =document.querySelector("#cubo").classList.add("rotacion2")
    }else{
        let y =document.querySelector("#cubo").classList.remove("rotacion2")
        let x =document.querySelector("#cubo").classList.add("rotacion1")
    }
})