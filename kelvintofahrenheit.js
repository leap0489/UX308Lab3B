// given a temperature in **kelvin** *convert* to **fahrenheit**.

function kelvinToFahrenheit (kelvin){
    let fahrenheit = (kelvin-273.15)*1.8+32;
    return fahrenheit;
}

export {kelvinToFahrenheit}