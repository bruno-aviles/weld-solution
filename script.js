const allInputs = document.querySelectorAll('input');

let voltsInput = document.getElementById('volts');
let ampsInput = document.getElementById('amps');
let travelSpeedInput = document.getElementById('travelSpeed');
let heatInputDisplay = document.getElementById('heatInputDisplay');

function heatInputFormula(volts, amps, travelSpeed) {
    // VOLTS*AMPS*60/TRAVELSPEED
    const seconds = 60;
    let heatInputResult = volts.value * amps.value * seconds / travelSpeed.value;

    // VALIDATION
    if (volts.value == 0 && amps.value == 0 && travelSpeed.value == 0) {
        return heatInputDisplay.innerHTML = "Enter Parameters";
    } else if (volts.value < 0 || amps.value < 0 || travelSpeed.value < 0) {
        return heatInputDisplay.innerHTML = "No Negative Numbers";
    } else if (isNaN(heatInputResult) == true || heatInputResult == Infinity) {
        return heatInputDisplay.innerHTML = "Invalid Result"; 
    }
    
    // DISPLAY RESULT
    return heatInputDisplay.innerHTML = heatInputResult + " Joules/min"; 
}

heatInputDisplay.innerHTML = "Calculate Heat Input!";

// RUNS FUNCTION WHEN INPUT VALUE CHANGES
for (let i=0; i < allInputs.length; ++i) {
    allInputs[i].addEventListener("change", e => {
        heatInputFormula(voltsInput, ampsInput, travelSpeedInput);
    })
}
