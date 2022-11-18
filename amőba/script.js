//Discord: Wyaxe#5819
const MAP = document.getElementById("box");
var gombtomb = [];

function initalize() { 
    for(let i = 0; i < 9; i++) {
        let newElement = document.createElement('div');
        newElement.innerHTML = `<button type="button" class="boxok" value="${i}" onclick="CheckNotFilled('gombok${i}')" id="gombok${i}"></button>`
        newElement.id = i;
        gombtomb.push("gombok"+i);
        MAP.appendChild(newElement);
    }
}

initalize();
lastClick = "bot";
validate = 0
function CheckNotFilled(x) {
    while (gombtomb[validate] < x) {
        validate++;
    }
    try {
        const gomb = document.getElementById("gombok" + validate);
        if(gomb.innerText == "") {
            FillNew();
        } else {
            alert("Az a mező már kivan töltve!");
        }
    } catch (err) {
        throw err;
    }
    validate = 0;
}

function FillNew() {
    try {
        const gomb = document.getElementById("gombok" + validate);

        if(PlayerIsNext() == true) {
            gomb.innerText = "X";
            lastClick = "player";
            checkWinner("X");
            NextBot();
        } 
    } catch (err) {
        throw err;
    }
}

function NextBot() {
    veletlengomb = Math.floor(Math.random()* 8);
    const gomb = document.getElementById("gombok" + veletlengomb);
    if(gomb.innerText == "X" || gomb.innerText == "Ｏ") {
        veletlengomb = Math.floor(Math.random()* 8);
        NextBot();
    } else {
        gomb.innerText = "Ｏ";
        checkWinner("Ｏ");
    }
    lastClick = "bot";
    console.log(veletlengomb);
}

function getButton(x1, x2, x3, xvalue) {
    var iText1 = document.getElementById("gombok" + x1).innerText;
    var iText2 = document.getElementById("gombok" + x2).innerText;
    var iText3 = document.getElementById("gombok" + x3).innerText;
    if(iText1 == xvalue && iText2 == xvalue && iText3 == xvalue) {
        return true;
    }
}

function checkWinner(x) {
    if(getButton(0,4,8, x) == true || getButton(2,4,6, x) == true || getButton(0,3,6, x) == true || getButton(2,5,8, x) == true || getButton(6,7,8, x) == true || getButton(0,1,2, x) == true || getButton(3,4,5, x) == true || getButton(1,4,7, x) == true || getButton(1,4,7, x) == true) {
        if(x == "X") {
            WriteWinner("jatekos");
        } else {
            WriteWinner("robot");
        }
    }
}

function WriteWinner(x) {
    setTimeout(()=>{
        if(x == "jatekos") {
            alert("Gratulálok nyertél!");
        } else if (x == "robot") {
            alert("Veszítettél!:(");
        }
        location.reload();
    }, 50)
}

function PlayerIsNext() {
    if(lastClick == "bot") {
        return true;
    } else {
        return false;
    }
}