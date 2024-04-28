// Global Functions-------------------------------------------------------------
// Clear Input 
function clearBtn() {
    document.getElementById("inputText").value = ""
}

// Clear Output
function clearOutput() {
    document.getElementById("output").innerHTML = "";
}

// Input Function
function inputValue() {
    return document.getElementById('inputText').value;
}



//Functions-------------------------------------------------------------

// Round A Number
function roundANUmber() {
    let totalPrice = inputValue();
    if (!totalPrice) {
        alert('Enter a number with decimal point')
    }
    let totalExactPrice = Math.round(totalPrice)

    // console.log (totalPrice)
    // console.log (totalExactPrice)
    document.getElementById('output').innerHTML = '<h1>' + totalExactPrice + '</h1>';
}

// Ceil A Number
function ceilANumber() {
    let totalPrice = inputValue();
    if (!totalPrice) {
        alert('Enter a number with decimal point')
    }

    let totalExactPrice = Math.ceil(totalPrice)

    // console.log (totalPrice)
    // console.log (totalExactPrice)
    document.getElementById('output').innerHTML = '<h1>' + totalExactPrice + '</h1>';
}

// Floor A Number
function floorANumber() {
    let totalPrice = inputValue();
    if (!totalPrice) {
        alert('Enter a number with decimal point')
    }

    let totalExactPrice = Math.floor(totalPrice)

    // console.log (totalPrice)
    // console.log (totalExactPrice)
    document.getElementById('output').innerHTML = '<h1>' + totalExactPrice + '</h1>';
}

// Generate A Random Number
function generateARandomNumber() {

    let totalExactPrice = Math.random()

    // console.log (totalPrice)
    // console.log (totalExactPrice)
    document.getElementById('output').innerHTML = '<h1>' + totalExactPrice + '</h1>';
}

// Throw A Dice
function throwADice() {
    let randomNumber = Math.random();
    randomNumber = (randomNumber * 6) + 1;
    let dice = Math.floor(randomNumber);
    let html = '<h1>' + dice + '</h1><p>Generating a random number from 1 to 6</p>'

    document.getElementById('output').innerHTML = html;
}

// Generate A Strong Password 
function generateAStrongPassword() {
    let length = inputValue();
    if (!length) {
        alert('Please enter length')
        return
    }
    let randomString = '';
    let upperCaseAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCaseAlphabets = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let symbols = "`~!@#$%^&*-=+?/,.|"
    let possibleStrings = upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols;
    let limit = length;

    for (i = 0; i < limit; i++) {
        let randomNumber = Math.random();
        randomString += possibleStrings.charAt(randomNumber * possibleStrings.length)
    }

    let html = '<h6>' + randomString + '</h6>' + '<p>Generating random string & length is:</p><span style="color: red; font-size: 20px;">' + possibleStrings.length + '</span>';
    document.getElementById('output').innerHTML = html;
}

// Converting Strings 
function convertingStrings() {
    let num = inputValue();
    if (!num) {
        alert('Enter a number with decimal point')
    }
    // num = parseInt(num)
    // num = parseFloat(num)
    num = Number(num);
    num = num.toFixed(2);
    document.getElementById('output').innerHTML = num;
}

// Controlling Strings
function controllingLength() {
    let num = inputValue();
    if (!num) {
        alert('Enter a number with decimal point')
    }
    // num = parseInt(num)
    // num = parseFloat(num)
    num = Number(num);
    num = num.toFixed(2);
    document.getElementById('output').innerHTML = num;
}

// Calculate GST
function calculateGST() {
    let cost = inputValue();
    if (!cost) {
        alert('Please enter your value to calculate')
    }

    let taxInput = +prompt('Enter your tax');
    let tax = cost * (taxInput / 100);
    cost = Number(cost)
    let totalCost = cost + tax;
    totalCost = Math.round(totalCost)
    document.getElementById('output').innerHTML = 'Your bill = <span style ="color: blue; font-weight: bold;">' + cost + '</span>';
    document.getElementById('output').innerHTML += '<br>Tax' + taxInput + '% = <span style="color: red; font-weight: bold;">' + tax.toFixed(2) + '</span>';
    document.getElementById('output').innerHTML += '<br>Total amount including tax = <span style ="color: green; font-weight: bold;">' + totalCost + '</span>';
}