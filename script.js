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


function editAny() {
    // document.getElementById("showInput").addEventListener("click",
    // function(){
    //     var containerEdit = document.getElementById("containerEdit");

    // }
    // )
    containerEdit.style.display = containerEdit.style.display === "none" ? "block" : "none";
    document.getElementById('wrapper').value = '';
    // containerEdit.style.display = "block"

}

function updateItem() {
    var inputOne = document.getElementById('inputa').value;
    var inputTwo = document.getElementById('inputb').value;
    var indexNew = Number(inputOne) - 1;
    purchase.splice(inputOne-1, 1, inputTwo);
    console.log(purchase);
    displayPurchase();
    if (inputOne == '' && inputTwo == '') {
        console.error("Fill in the spaces");
        alert("Fill in the spaces");
        document.getElementById("containerEdit").innerHTML = '';
    }
    document.getElementById('inputOne').value = '';
    document.getElementById('inputTwo').value = '';
}


function deleteAny() {
    wrapper.style.display = wrapper.style.display === "none" ? "block" : "none";
    document.getElementById('containerEdit').value = '';
}


function removeItem() {
    var input1st = document.getElementById('firstInput').value;
    var newIndex = Number(input1st) - 1;
    if (input1st == '') {
        console.error("Fill in the spaces");
        alert("Fill in the spaces");
        document.getElementById("wrapper").innerHTML = '';
    } else {
        if (input1st > purchase.length) {
            console.error("Indexing Starts From ZERO");
            alert("Indexing Starts From ZERO");
        } else {
            purchase.splice(newIndex-1, 1);
            console.log(purchase);
            displayPurchase();
        }
        document.getElementById('input1st').value = '';
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