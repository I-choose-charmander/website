function monthly_breakdown(){
    var income = document.getElementById("inc").value;
    var l = income * .5
    var p = income * .3
    var s = income * .2

    document.getElementById("living").innerHTML = l
    document.getElementById("personal").innerHTML = p
    document.getElementById("saving").innerHTML = s 
}
function LivingBreakdown(){
    var income = document.getElementById("inc").value;
    var living_income = income * .5 
    var mrent = document.getElementById("rent").value;
    var mgroc = document.getElementById("food").value;
    var mutil = document.getElementById("util").value;
    var mgas = document.getElementById("gas").value;

    
    var lmtotal = +mrent + +mgroc + +mutil + +mgas

    var living_return = living_income - lmtotal

    document.getElementById("ll").innerHTML = living_return
    document.getElementById("lt").innerHTML = lmtotal
}
function PersonalBreakdown(){
    var income = document.getElementById("inc").value;
    var p = income * .3

    var phone = document.getElementById("cell").value;
    var veh = document.getElementById("car").value;
    var subscrip = document.getElementById("sub").value;

    var pmtotal = +phone + +veh + +subscrip
    var personal_return = p - pmtotal

    document.getElementById("pt").innerHTML = personal_return
    document.getElementById("pl").innerHTML = pmtotal
}
function SavingBreakdown(){
    var income = document.getElementById("inc").value;
    var s = income * .2
    
    var savings = document.getElementById("saveg").value;
    var current_saving = document.getElementById("csave").value;

    if (savings != current_saving){
        var amount_to_save = s/2 
        document.getElementById("save").innerHTML = amount_to_save
        document.getElementById("invest").innerHTML = amount_to_save
    }else{
        document.getElementById("invest").innerHTML = s
        document.getElementById("save").innerHTML = 0
    }
}
