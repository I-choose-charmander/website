function temperature(){
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}
function weight(){
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2
    document.getElementById("lbs").value = p
}
function distance(){
    var dis = document.getElementById("km").value;
    var mile = dis/1.609
    document.getElementById("m").value = mile
}