function removeButton () {

    var items = document.querySelector("#list").getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) {
        let span = document.createElement("span");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        items[i].appendChild(span);
    }

    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        }
    }

}

removeButton();


function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function newElement() {
    let inputText = document.querySelector('#task').value;

    if(!isEmptyOrSpaces(inputText)) {
        let ulDOM = document.querySelector('#list');
        var li = document.createElement("li");
        li.textContent = inputText;
        ulDOM.appendChild(li);
        $("#addedToast").toast("show");
    }
    else {
        $('#failedToast').toast('show');
    }
    
    localStorage.setItem(`item ${localStorage.length+1}`,li.innerText)
    document.querySelector('#task').value = "";
    removeButton();
    
}

document.querySelector('#list').addEventListener("click", function(clickedLi) {
    clickedLi.target.classList.toggle("checked");
});