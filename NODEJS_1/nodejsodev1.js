const pi = 3.14;
const arguments = process.argv.slice(2);

function nodejsodev1(radius) {
    let area = pi * Math.pow(radius, 2)
    console.log("Yarıçapı", radius, "olan dairenin alanı = ", area.toFixed(2));
}

nodejsodev1(arguments[0] *1);