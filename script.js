// var cart = ['Fish', 'Meat', 'Snail', 'Egg', 'Plantain', 'Beef'];
// console.log(cart[5]);//

// cart.pop();
// cart.shift();
// cart.push('cammel meat');
// cart.unshift('goat meat');
// console.log(cart);
// disp.innerHTML = cart;

var purchase = [];
console.log(purchase);
var tabRow = rowNumber.value;
var tabColumn = colNumber.value;

function displayPurchase() {
    show.innerHTML = "";
    for (i = 0; i < purchase.length; i++) {
        show.innerHTML += `<p>${i + 1}. ${purchase[i]}</p>`;
    }
}

function addItems() {
    if (inp.value !== '') {
        console.log(inp.value);
        purchase.push(inp.value);
        document.getElementById('inp').value = '';
        console.log(purchase);
        var tab = "<table>"
        tab += "<tr>"
        displayPurchase()
        tab += i + sign + j + "=" + calcValue + "<br>" + "<br>";
        tab += "<td>"

    } else {
        alert("Fill in something");
        console.error("It's Empty");
    }
}

function addFirst() {
    if (inp.value !== '') {
        console.log(inp.value);
        purchase.unshift(inp.value);
        document.getElementById('inp').value = '';
        console.log(purchase);
        show.innerHTML = "";
        displayPurchase()
    } else {
        alert("Fill in something");
        console.error("It's Empty");
    }
}

function deleteFirst() {
    if (inp.value === '') {
        purchase.splice(0, 1)
        console.log(purchase);
        displayPurchase()
    } else {
        alert("Fill in something");
        console.error("It's Empty");
    }
}

function deleteLast() {
    if (inp.value === '') {
        purchase.pop(inp.value)
        console.log(purchase);
        displayPurchase()
    } else {
        alert("Fill in something");
        console.error("It's Empty");
    }
}



function deleteAny() {
    var num = Number(document.getElementById("deleteInput").value)
    if (inp === "") {
        alert("No item to delete")
    }
    if(num === 0) {
        console.error("Please fill the space");
        inputValue.style.display = "block";
    }
}


function deleteAll() {
    if (inp.value === '') {
        purchase.splice(0, purchase.length);
        console.log(purchase);
        displayPurchase();
    } else {
        alert("Fill in something");
        console.error("It's Empty");
    }
}

tab += "</table>"
dispDiv.innerHTML = tab
dispDiv.style.color = "white"
document.getElementById("rowNumber").value = ""
document.getElementById("colNumber").value = ""