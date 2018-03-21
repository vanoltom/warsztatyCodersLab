var dropDownList = document.querySelectorAll('.drop_down_list');

var summaryType = document.querySelector('.panel_left h4');
var summaryTypePrice = document.querySelector('.panel_right h4');

var summaryColor = document.querySelector('.panel_left .color');
var summaryColorPrice = document.querySelector('.panel_right .color');

var summaryPattern = document.querySelector('.panel_left .pattern');
var summaryPatternPrice = document.querySelector('.panel_right .pattern');

var summaryTransport = document.querySelector('.panel_left .transport');
var summaryTransportPrice = document.querySelector('.panel_right .transport');
var checkbox = document.querySelector('#transport');

var sumTotal = document.querySelector('.sum strong');
var allValues = document.querySelectorAll('.panel_right .value');

function calculatePrice() {
    var totalPrice = 0;

    if(checkbox.checked){
        summaryTransportPrice.innerText = transport.getAttribute('data-transport-price');
        summaryTransport.innerText = 'Transport';
    } else {
        summaryTransportPrice.innerText = '';
        summaryTransport.innerText = '';
    }

    for(var i = 0; i < allValues.length; i++){
        if(allValues[i].innerText !== null){
            totalPrice += Number(allValues[i].innerText);
        }
    }

    sumTotal.innerText = totalPrice;
}

function chooseChair() {

    this.querySelector('.list_panel').classList.toggle('visible_list');
    //na obiekcie na którym wywołuję funkcję przełączam klasę, aby lista była widoczna
    var listElements = this.querySelectorAll('li');
    //pobieram listę znaczników li na obiekcie na którym wywołuję funkcję
    var thisLabel = this.querySelector('.list_label');
    //pobieram pole list_label na obiekcie na którym wywołuję

    //dla każdego elemenu listy dodaję nasłuchiwanie na kliknięcie
    for (var i = 0; i < listElements.length; i++) {

        listElements[i].addEventListener('click', function () {
            thisLabel.innerText = this.innerText;
            //do pola list_label na obiekcie, na którym wywołuję
            //wstawiam tekst z klikniętego elementu li

            summaryType.innerText = this.innerText;
            // var typePrice = Number(this.getAttribute('data-price'));
            summaryTypePrice.innerText = Number(this.getAttribute('data-price'));
        })
    }
    calculatePrice();
}

function chooseColor() {

    this.querySelector('.list_panel').classList.toggle('visible_list');
    var listElements = this.querySelectorAll('li');
    var thisLabel = this.querySelector('.list_label');

    for (var i = 0; i < listElements.length; i++) {

        listElements[i].addEventListener('click', function () {
            thisLabel.innerText = this.innerText;
            summaryColor.innerText = this.innerText;
            summaryColorPrice.innerText = Number(this.getAttribute('data-price'));
        })
    }
    calculatePrice();
}

function choosePattern() {

    this.querySelector('.list_panel').classList.toggle('visible_list');
    var listElements = this.querySelectorAll('li');
    var thisLabel = this.querySelector('.list_label');

    for (var i = 0; i < listElements.length; i++) {

        listElements[i].addEventListener('click', function () {
            thisLabel.innerText = this.innerText;
            summaryPattern.innerText = this.innerText;
            summaryPatternPrice.innerText = Number(this.getAttribute('data-price'));
        })
    }
    calculatePrice();
}

dropDownList[0].addEventListener('click', chooseChair);
dropDownList[1].addEventListener('click', chooseColor);
dropDownList[2].addEventListener('click', choosePattern);
checkbox.addEventListener('click', calculatePrice);