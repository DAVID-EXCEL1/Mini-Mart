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
        displayPurchase()
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


function editAny(){
    // document.getElementById("showInput").addEventListener("click",
    // function(){
    //     var containerEdit = document.getElementById("containerEdit");
        
    // }
    // )
    containerEdit.style.display = containerEdit.style.display === "none" ? "block" : "none";
    // containerEdit.style.display = "block"

}

function updateItem(){
    var inputOne = document.getElementById('inputa').value
    var inputTwo = document.getElementById('inputb').value
    console.log(purchase.splice(inputa.value, 1, inputb.value));
    console.log(purchase);
    displayPurchase()
    if (inputa.value == '' && inputb.value == ''){
        console.error("Fill in the spaces");
        alert("Fill in the spaces");
        document.getElementById("containerEdit").innerHTML = ''
    }
    document.getElementById('inputa').value = ''
    document.getElementById('inputb').value = ''
}


function deleteAny(){
    wrapper.style.display = wrapper.style.display === "none" ? "block" : "none";
}


function removeItem(){
    var input1st = document.getElementById('firstInput').value
    console.log(purchase.splice(firstInput.value, 1));
    console.log(purchase);
    displayPurchase()
    if (firstInput.value == ''){
        console.error("Fill in the spaces");
        alert("Fill in the spaces");
        document.getElementById("wrapper").innerHTML = ''
    }
    if (firstInput.value >= purchase.length){
        console.error("Indexing Starts From ZERO");
        alert("Indexing Starts From ZERO")
    }
    document.getElementById('firstInput').value = ''
}


function deleteAll() {
    if (inp.value === '') {
        purchase.splice(0, purchase.length)
        console.log(purchase);
        displayPurchase()
    } else {
        alert("Fill in something");
        console.error("It's Empty");
    }
}
