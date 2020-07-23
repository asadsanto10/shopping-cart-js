// increment item 1
let incrementItem1 =  document.getElementById('incrementItem1');
incrementItem1.addEventListener('click', function () {
    incrementDecrement('itemValue1', 'defultItemPrice1', 'increment')
    // const itemvalue = document.getElementById('itemValue').value;
    // const totalItemQuantity = parseInt(itemvalue) + 1;
    // //console.log(totalItemQuantity);
    // document.getElementById('itemValue').value = totalItemQuantity;
    // const defultItemPrice = document.getElementById('defultItemPrice').innerText;
    // //console.log(defultItemPrice);
    // const totalPrice = defultItemPrice * (totalItemQuantity / itemvalue);
    // document.getElementById('defultItemPrice').innerText = totalPrice;
});

//  increment item 2
let incrementItem2 = document.getElementById('incrementItem2');
incrementItem2.addEventListener('click', function () {
    incrementDecrement('itemValue2', 'defultItemPrice2', 'increment')
});

// decrement item 1
let decrementItem1 = document.getElementById('decrementItem1');
decrementItem1.addEventListener('click', function () {
    // const itemvalue = document.getElementById('itemValue').value;
    // if (itemvalue <= 1) {
    //     document.getElementById('itemValue').value = 1;
    // }
    // else{
    //     const totalItemQuantity = parseFloat(itemvalue) - 1;
    //     //console.log(totalItemQuantity);
    //     document.getElementById('itemValue').value = totalItemQuantity;
    //     const defultItemPrice = document.getElementById('defultItemPrice').innerText;
    //     //console.log(defultItemPrice);
    //     const totalPrice = defultItemPrice * (totalItemQuantity / itemvalue);
    //     document.getElementById('defultItemPrice').innerText = totalPrice;
    // }
    incrementDecrement('itemValue1', 'defultItemPrice1', 'decrement')
});
// decrement item 2
let decrementItem2 = document.getElementById('decrementItem2');
decrementItem2.addEventListener('click', function () {
    incrementDecrement('itemValue2', 'defultItemPrice2', 'decrement')
});

// cart remove function
document.getElementById('closeItem1').addEventListener('click', function () {
    removeCart('item-1');
});
document.getElementById('closeItem2').addEventListener('click', function () {
    removeCart('item-2');
});

// incremenent decrement function
function incrementDecrement(inputItemvale, defultItemPriceAmount, type) {
    const itemvalue = document.getElementById(inputItemvale).value;
    const totalItemQuantity = type == 'increment' ? parseInt(itemvalue) + 1 : parseInt(itemvalue) - 1;
    const itemPriceAmount = document.getElementById(defultItemPriceAmount).innerText;
    const newItemPrice = itemPriceAmount / itemvalue;
    //console.log(itemPriceAmount);
    if (totalItemQuantity <= 1) {
        document.getElementById(inputItemvale).value = 1;
        var stt = document.getElementById(defultItemPriceAmount).innerText = newItemPrice;
        //console.log(stt);
    }
    else{
        document.getElementById(inputItemvale).value = totalItemQuantity;
        const updateItemPrice = newItemPrice * parseFloat(totalItemQuantity);
        document.getElementById(defultItemPriceAmount).innerText = Math.round(updateItemPrice);
    }

    subtotal();
}


// cart remove function
function removeCart(remobeCartId) {
    document.getElementById(remobeCartId).style.display = 'none';
    subtotal();
}

// ammoutn and vat function
function subtotal() {
    const item1 = document.getElementById('defultItemPrice1').innerText;
    const item2 = document.getElementById('defultItemPrice2').innerText;
    const getSubtotal = parseFloat(item1) + parseFloat(item2);
    //console.log(getSubtotal);
    const subtotal =  document.getElementById('subttoal').innerText = getSubtotal;
    const vat =  document.getElementById('vat').innerText = getSubtotal * 5 / 100;
    document.getElementById('totalAmount').innerText = subtotal + vat;

}
subtotal();