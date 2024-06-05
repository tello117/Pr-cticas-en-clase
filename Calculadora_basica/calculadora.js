var val1, val2, res, h3


function cal_suma(){

    val1=parseFloat(document.getElementById("val1").value) 
    val2=parseFloat(document.getElementById("val2").value)

    if(isNaN(val1) || isNaN(val2)){
        if(isNaN(val1)){
            h3.innerHTML="Valores no validos en la caja 1"
            document.getElementById("val1").focus()
            return
        }
        else{
            h3.innerHTML="Valores no validos en la caja 2"
            document.getElementById("val2").focus()
            return
        }
    }
    res = val1 + val2
    h3=document.getElementById("res") 
    h3.innerHTML=res
}

function cal_resta(){
    val1=parseFloat(document.getElementById("val1").value)
    val2=parseFloat(document.getElementById("val2").value)

    if(isNaN(val1) || isNaN(val2)){
        if(isNaN(val1)){
            h3.innerHTML="Valores no validos en la caja 1"
            document.getElementById("val1").focus()
            return
        }
        else{
            h3.innerHTML="Valores no validos en la caja 2"
            document.getElementById("val2").focus()
            return
        }
    }
    res= val1-val2
    h3=document.getElementById("res")
    h3.innerHTML=res

}
function cal_mult(){
    val1=parseFloat(document.getElementById("val1").value)
    val2=parseFloat(document.getElementById("val2").value)

    if(isNaN(val1) || isNaN(val2)){
        if(isNaN(val1)){
            h3.innerHTML="Valores no validos en la caja 1"
            document.getElementById("val1").focus()
            return
        }
        else{
            h3.innerHTML="Valores no validos en la caja 2"
            document.getElementById("val2").focus()
            return
        }
    }
    res= val1*val2
    h3=document.getElementById("res")
    h3.innerHTML=res
}
function cal_div(){
    val1=parseFloat(document.getElementById("val1").value)
    val2=parseFloat(document.getElementById("val2").value)

    if(isNaN(val1) || isNaN(val2)){
        if(isNaN(val1)){
            h3.innerHTML="Valores no validos en la caja 1"
            document.getElementById("val1").focus()
            return
        }
        else{
            h3.innerHTML="Valores no validos en la caja 2"
            document.getElementById("val2").focus()
            return
        }
    }
    res= val1/val2
    h3=document.getElementById("res")
    h3.innerHTML=res
}