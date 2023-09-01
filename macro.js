function BMR(){
    var weight = document.getElementById("weight").value
    var feet = document.getElementById("feet").value
    var inches = document.getElementById("inches").value
    var A = document.getElementById("age").value

    var W = weight /  2.2
    var H = (((feet * 12) + +inches) * 2.54)
    
    
    if(document.getElementById("checkbox").checked == false) {
        var bmr = 66.47 + ( 13.75 * W) + ( 5.003 * H ) - ( 6.755 * A )
        document.getElementById("bmr").innerHTML = bmr
    }else if(document.getElementById("checkbox").checked == true){
        var bmr =  (665.1 + (9.563 + W) + (1.850  * H) - (4.676 * A))
        document.getElementById("bmr").innerHTML = bmr
    }
}

