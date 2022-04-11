let conta = document.getElementById('conta')
let pessoas = document.getElementById('pessoas')
let custom = document.getElementById('custom')

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')

let display1 = document.getElementById('display1')
let display2 = document.getElementById('display2')

let reset = document.getElementById('reset')

let porCento = null
let valorDaGorgeta = 0 
let total = 0

function defalt(){//para deixar o botão de reset 'inativo'
    if(conta.value > 0 || pessoas.value > 0 ){
        reset.style.opacity = '1'
    }else{
        reset.style.opacity = '.4'
    }
}

function naoPodeSerZero(){//para aparecer a mensagem ecrito em vermolho que no campo o valor tem que ser maior que zero
    if( conta.value !== '' && porCento !== null && pessoas.value === ''){
        pessoas.style.border = '2px solid red'
        document.getElementById('cnt2').style.display = 'inline'
    }else{
        pessoas.style.border = '2px solid hsl(189, 41%, 97%)'
        document.getElementById('cnt2').style.display = 'none'
    }
    if( pessoas.value !== '' && porCento !== null && conta.value === ''){
        conta.style.border = '2px solid red'
        document.getElementById('cnt1').style.display = 'inline'
    }else{
        conta.style.border = '2px solid hsl(189, 41%, 97%)'
        document.getElementById('cnt1').style.display = 'none'
    }
}

function calculaGorgeta(){//calcula o valor da gorgeta e divide pelo número de pessoas
    let aux
    if(conta.value > 0 && porCento > 0 && pessoas.value > 0){
        aux = (conta.value / 100  * porCento) / pessoas.value
    }else{
        aux = '$' + 0
    }
    valorDaGorgeta = aux
    display1.innerHTML = '$' + valorDaGorgeta.toFixed(2)
}

function totalPorCabeca(){//calcula o valor total da conta mais o da gorgeta e divide pelo número de pessoas
    let aux
    if(conta.value > 0 && valorDaGorgeta > 0 && pessoas.value > 0){
        aux = valorDaGorgeta + conta.value / pessoas.value
    }else{
        aux = '$' + 0
    }
    total = aux
    display2.innerHTML = '$' + total.toFixed(2)
}

conta.onkeyup = function(){
    defalt() 
    naoPodeSerZero()
    calculaGorgeta()
    totalPorCabeca()
}

pessoas.onkeyup = function(){
    defalt() 
    naoPodeSerZero()
    calculaGorgeta()
    totalPorCabeca()
}

reset.onclick = function(){
    conta.value = ""
    pessoas.value = ""
    custom.value = ""
    display2.innerHTML = '0.00'
    display1.innerHTML = '0.00'
    reset.style.opacity = '.4'
}

btn1.onclick = function(){
    porCento = 5
    naoPodeSerZero()
    calculaGorgeta()
    totalPorCabeca()
    
}
btn2.onclick = function(){
    porCento = 10
    naoPodeSerZero()
    calculaGorgeta()
    totalPorCabeca()
}

btn3.onclick = function(){
    porCento = 15
    naoPodeSerZero()
    calculaGorgeta()
    totalPorCabeca()
}

btn4.onclick = function(){
    porCento = 25
    naoPodeSerZero()
    calculaGorgeta()
    totalPorCabeca()
}

btn5.onclick = function(){
    porCento = 50
    naoPodeSerZero()
    calculaGorgeta()
    totalPorCabeca()

}

custom.onkeyup = function(){
    porCento = custom.value
    calculaGorgeta()
    totalPorCabeca()
}

