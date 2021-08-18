// get product quantity for increment
function getCount(isIncrement, inputCount, pdtPriceOf, newPrice) {
    const countInput = document.getElementById(inputCount);
    const pdtPrice = document.getElementById(newPrice);
    const countValueText = countInput.value;
    const countValue = parseInt(countValueText);

    if (isIncrement) {

        let newCountValue = countValue + 1;
        countInput.value = newCountValue;
        pdtPrice.innerText = newCountValue * pdtPriceOf;
    }

    else if (countValue > 1) {

        let newCountValue = countValue - 1;
        countInput.value = newCountValue;
        pdtPrice.innerText = newCountValue * pdtPriceOf;
    }
}
//subtotal calculation
function setSubTotal() {
    const phonPrice = document.getElementById('phone-price');
    const phonPriceTxt = phonPrice.innerText;
    const phonPriceVal = parseInt(phonPriceTxt);

    const casePrice = document.getElementById('case-price');
    const casePriceTxt = casePrice.innerText;
    const casePriceVal = parseInt(casePriceTxt);
    const totalPrice = phonPriceVal + casePriceVal;

    const subtotal = document.getElementById('subtotal-val');
    const subtotalTxt = subtotal.innerText;
    const subtotalVal = parseInt(subtotalTxt);

    const totalPriceNew = totalPrice + subtotalVal;
    subtotal.innerText = totalPriceNew;

}


// phone shopping
document.getElementById('phone-increment-btn').addEventListener('click', function () {

    getCount(true, 'phone-input', 1219, 'phone-price');
    setSubTotal();

});

document.getElementById('phone-decrement-btn').addEventListener('click', function () {

    getCount(false, 'phone-input', 1219, 'phone-price');


});
// case shopping
document.getElementById('case-increment-btn').addEventListener('click', function () {
    getCount(true, 'case-input', 59, "case-price");
    setSubTotal();
});

document.getElementById('case-decrement-btn').addEventListener('click', function () {
    getCount(false, 'case-input', 59, "case-price");

});


