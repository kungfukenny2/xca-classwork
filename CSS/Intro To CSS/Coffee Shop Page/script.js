function submitForm() {
    let name = document.querySelector('#name').value
    let mailaddress = document.querySelector('#mailaddress').value

    let drink = document.querySelector('input[name=drink]:checked').value
    let extras = document.querySelectorAll('input[name=extras]:checked').value
}

alert('Thanks for your order ${fullname}: Your order is ${drink} with ${extras}')