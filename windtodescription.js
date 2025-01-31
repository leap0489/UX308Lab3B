//convert a windspeed to  a description using The Beaufort Wind Scale.

function convertWindToDescription(windspeed) {
    let description = "Calm";
    if (windspeed >= 1 && windspeed <= 5) {
        description = "Light air"
    }else if (windspeed >= 6 && windspeed <= 11) {
        description = "Light breeze"
    }else if (windspeed >= 12 && windspeed <= 19) {
        description = "Gentle breeze"
    }else if (windspeed >= 20 && windspeed <= 28) {
        description = "Moderate breeze"
    }else if (windspeed >= 29 && windspeed <= 38) {
        description = "Fresh breeze"
    }else if (windspeed >= 39 && windspeed <= 46) {
        description = "Strong breeze"
    }else if (windspeed >= 50 && windspeed <= 61) {
        description = "Near gale"
    }else if (windspeed >= 62 && windspeed <= 74) {
        description = "Gale"
    }else if (windspeed >= 75 && windspeed <= 88) {
        description = "Strong gale"
    }else if (windspeed >= 89 && windspeed <= 102) {
        description = "Storm"
    }else if (windspeed >= 103 && windspeed <= 117) {
        description = "Violent storm"
    }else if (windspeed >= 116 && windspeed <= 133) {
        description = "Hurricane"
    }

    
    return description;
}

export { convertWindToDescription }