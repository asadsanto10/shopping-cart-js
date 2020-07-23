// increment item and decrement item
let incrementItem =  document.getElementById('incrementItem');
incrementItem.addEventListener('click', function () {
    incrementDecrement('itemValue', 'defultItemPrice', 'increment')
    // const itemvalue = document.getElementById('itemValue').value;
    // const totalItemQuantity = parseInt(itemvalue) + 1;
    // //console.log(totalItemQuantity);
    // document.getElementById('itemValue').value = totalItemQuantity;
    // const defultItemPrice = document.getElementById('defultItemPrice').innerText;
    // //console.log(defultItemPrice);
    // const totalPrice = defultItemPrice * (totalItemQuantity / itemvalue);
    // document.getElementById('defultItemPrice').innerText = totalPrice;
});

let decrementItem = document.getElementById('decrementItem');
decrementItem.addEventListener('click', function () {
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
    incrementDecrement('itemValue', 'defultItemPrice', 'decrement')
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
}
