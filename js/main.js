
var c = 0 ;

function sum() {
c = c + 1;
document.getElementById('result').innerHTML= c
}

function subtract() {
    c = c - 1
    document.getElementById('result').innerHTML= c
}

function convert() {
    var x = document.getElementById('myInput').value;
    var r = document.getElementById('amount');

    if (isNaN(x)) {
        r.innerHTML= "Please Enter A Number";
    }
    else if (x < 0) {
        r.innerHTML = "Please Enter A Positive Number";
    }
    else if (x == 0) {
        r.innerHTML = "Please Enter A Number grater than 0"
    }
    else{
        r.innerHTML= x * 50 + " " + "Egyptian Pound";
    }
    return false
}

























// var y = x.length ===> Number of letters in the word.
// var y = x.indexOf('mahmoud') ===>  Search about letter - word - a part of word.
// var y = x.lastIndexOf('u') ===> = indexOf but this contrary to indexOf in a way of search.
// var y = x.slice(6,12) ===>   Cut word or a part of word.
// var y = x.trim() ===> Handle the space in the word before send to database.
// var y = x.toUpperCase(). معروفة يعني
// var y = x.toLowerCase(). 
// var y = x.charAt('d')===> Search about num of letter by letters .

