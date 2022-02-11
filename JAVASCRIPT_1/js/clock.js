var nameLabel = document.querySelector('#myName');
var inputName = prompt("Lütfen adinizi giriniz","");
nameLabel.innerHTML = inputName;

var days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', ' Cuma', 'Cumatesi', 'Pazar'];

var clockLabel = document.querySelector('#myClock');

function showTime() {
    var date = new Date();
    var display = date.toLocaleTimeString() + days[date.getDay()-1];
    clockLabel.innerHTML = display;
    setTimeout(showTime,1000);
}
