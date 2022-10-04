const poluValidator = (value) => {
    if (value >= 0 && value <= 50){
        console.log('Good')
        console.log('Enjoy your usual outdoor activities')
    }
    if (value >= 51 && value <= 100){
        console.log('Moderate')
        console.log('Extremely sensitive children and adults should regrain from strenuous outdoor activities')
    }
    if (value >= 101 && value <= 150){
        console.log('Unhealthy for Sensitive Groups')
        console.log('Sensitive children and adults should limit prolonged outdoor activity')
    }
    if (value >= 151 && value <= 200){
        console.log('Unhealthy')
        console.log('Sensitive groups should avoid outdoor exposute and others should limit prolonged outdoor activity')
    }
    if (value >= 201 && value <= 300){
        console.log('Very Unhealthy')
        console.log('Sensitive groups should stay indoors and others should avoid outdoor activity')
    }
    if (value >= 301 && value <= 500){
        console.log('Hazardous')
        console.log('Everyone should avoid all outdoor exertion')
    }
}