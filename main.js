// increment item and decrement item
let incrementItem =  document.getElementById('incrementItem');
incrementItem.addEventListener('click', function () {
    incrementDecrement('itemValue', 'defultItemPrice', 'increment')
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


function incrementDecrement(itemvaleID, defultItemPriceID, type) {
    const itemvalue = document.getElementById(itemvaleID).value;
    const totalItemQuantity = type == 'increment' ? parseFloat(itemvalue) + 1 : parseFloat(itemvalue) - 1;
    //console.log(totalItemQuantity);
    const totalPrice = totalItemQuantity / itemvalue;
    if (totalItemQuantity <= 1) {
        const sd = document.getElementById(itemvaleID).value = 1;
        document.getElementById(defultItemPriceID).innerText = sd * totalPrice;
    }
    else{
        document.getElementById(itemvaleID).value = totalItemQuantity;
        const defultItemPrice = document.getElementById(defultItemPriceID).innerText;
        //console.log(defultItemPrice);
        const updatePrice = defultItemPrice * totalPrice;
        document.getElementById(defultItemPriceID).innerText = updatePrice;
    }
}
