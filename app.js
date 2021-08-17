// get product quantity for increment
function getCount(isIncrement, inputCount, pdtPriceOf, forDisabled) {
    const countInput = document.getElementById(inputCount);
    const pdtPrice = document.getElementById('phone-price');
    const countValueText = countInput.value;
    const countValue = parseInt(countValueText);

    if (isIncrement) {

        let newCountValue = countValue + 1;
        countInput.value = newCountValue;
        pdtPrice.innerText = newCountValue * pdtPriceOf;
        document.getElementById(forDisabled).removeAttribute('disabled');

    }

    else {

        let newCountValue = countValue - 1;
        if (newCountValue >= 1) {
            countInput.value = newCountValue;
            pdtPrice.innerText = newCountValue * pdtPriceOf;
            document.getElementById(forDisabled).removeAttribute('disabled');
        }
        else {
            document.getElementById(forDisabled).setAttribute('disabled', true);
        }

    }
}

// phone shopping
document.getElementById('phone-increment-btn').addEventListener('click', function () {
    getCount(true, 'phone-input', 1219, 'phone-increment-btn');
});

document.getElementById('phone-decrement-btn').addEventListener('click', function () {
    getCount(false, 'phone-input', 1219, 'phone-increment-btn');

});


