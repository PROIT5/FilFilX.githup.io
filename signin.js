const email =
    document.getElementsByClassName('email')

const password =
    document.getElementsByClassName('password')


const form =
    document.getElementsById('form')

const errorElement =
    document.getElementsById('error')

form.addEventListener('submit', (e) => {

    let messages = []
    if (email.value === '' || email.value == null) {
        messages.push('Email is required')
    }

    if (password.value.lenght <= 6 || password.value >= 20) {
        messages.push('Password must be longer than 6 charachtes or less than 20 charachtes ')
    }


})