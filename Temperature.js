function swap() {
    let from = document.getElementById("t1");
    let To = document.getElementById("t2");
    [from.value, To.value] = [To.value, from.value]
}

function convert(){
    let form = document.getElementById("t1");
    let To = document.getElementById("t2");
    if (form.value == To.value) {
        result.value=first.value;
    }
    if (form.value == "Celsius" && To.value == "Fahrenheit") {
        let res = (first.value * (9/5)) + 32;
        result.value=res + " °F";
    }
    if (form.value == "Celsius" && To.value == "Kelvin") {
        let res= parseFloat(first.value) + 273.15;
        result.value=res + " K";
    }
    if (form.value == "Fahrenheit" && To.value == "Celsius") {
        let res= (first.value - 32 ) * (5/9);
        result.value=res+" °C";
    }
    if (form.value == "Fahrenheit" && To.value == "Kelvin") {
        let res=((parseFloat(first.value) + 459.67) * (5/9));
        result.value=res+" K";
    }
    if (form.value == "Kelvin" && To.value == "Fahrenheit") {
        let res=(first.value * (9/5)) - 459.67;
        result.value=res +" °F";
    }
    if (form.value == "Kelvin" && To.value == "Celsius") {
        let res= (first.value) - 273.15;
        result.value=res+" °C";
    }
}