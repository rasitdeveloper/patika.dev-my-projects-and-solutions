const pi = 3.14;

function circleArea(radius) {
    let area = pi * Math.pow(radius, 2)
    console.log('radius = ',radius, 'area = ', area.toFixed(2));
}

function circleCircumference(radius) {
    let circumference = 2 * pi * radius;
    console.log('radius = ', radius, 'circumference = ', circumference.toFixed(2));
}

module.exports = {
    circleArea,
    circleCircumference
}