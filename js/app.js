document.addEventListener("DOMContentLoaded", function () {


    //usuwania napisu w boxie MARGARITA poczatek
    var showArticle = document.querySelector(".art2");

    function onMouseOver() {
        console.log(this);
        var hoverElement = this;
        var articleHeader = hoverElement.querySelector('.art2> .articleHeader');
        articleHeader.style.display = 'none';

        function hideArticleHeader() {
            articleHeader.style.display = 'block';
        }

        hoverElement.addEventListener('mouseout', hideArticleHeader);
    }

    showArticle.addEventListener('mouseover', onMouseOver);
//usuwania napisu w boxie MARGARITA - koniec
//    rozwijane menu początek

    var menuLIs = document.querySelectorAll('.menu > li');

    for(i = 0; i < menuLIs.length; i++) {
        menuLIs[i].addEventListener('mouseover',menuRoll);
        menuLIs[i].addEventListener('mouseout',menuRollOut);
    }
    function menuRoll () {
        this.querySelector('.submenu').style.display = 'block';
    }
    function menuRollOut () {
        this.querySelector('.submenu').style.display = 'none';
    }
//    koniec rozwijane menu


//        slider

    var btnPrev = document.querySelector('.arrowLeft');
    var btnNext = document.querySelector('.arrowRight');
    var img = document.querySelectorAll('.div-image img');
    console.log(img);

    var pictureIndex = 0;

    console.log(pictureIndex);

    img[pictureIndex].classList.add("visible");

    btnPrev.addEventListener("click", function (event) {
        console.log("działa prev");
        img[pictureIndex].classList.remove("visible");

        pictureIndex--;
        if (pictureIndex < 0) {
            pictureIndex = img.length - 1;
        }
        img[pictureIndex].classList.add("visible");

    })


    btnNext.addEventListener("click", function (event) {
        console.log("działa next");
        img[pictureIndex].classList.remove("visible");
        pictureIndex++;
        if (pictureIndex >= img.length) {
            pictureIndex = 0;
        }
        img[pictureIndex].classList.add("visible");
    })
//    drop down menu

    var arrow = document.querySelectorAll(".drop_down_list");
    console.log(arrow);
    var typeChair = this.querySelectorAll(".list_panel li");
    console.log(typeChair);

    for(i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click",dropDown);
        arrow[i].removeEventListener("click",dropDownOut);
    }
    function dropDown () {

        this.querySelector('.list_panel').classList.toggle('visible');
    }
    function dropDownOut () {
        this.querySelector('.list_panel').classList.toggle('noneVisilbe');
    }
    for(i=0; i<typeChair.length; i++) {
        typeChair[i].addEventListener('click', addChair);
        function addChair() {
            typeChair.innerHTML = this.innerHTML;
            console.log(this);
            var chair = this;
            chair.innerHTML = document.querySelector('.choise');
        //    nie wiem jak pokazac na liście zaznaczony produkt i jak go zapamietac bo potem musze dodac ten wynik do kalkulatora

        }
    }


});



