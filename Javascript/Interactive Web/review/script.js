
function changeWords() {
    document.querySelector('p').innerHTML = "Something Else"

}
function submitForm() {

    let name = document.querySelector('#name').value
    let position = document.querySelector('input[name=position]:checked').value
    let language = document.querySelectorAll('input[name=language]:checked').value
    languages.forEach(function(element) {
        element.value
    })

    alert('Your name is: ${name} and you are a ${position} and you like ${language}')

}