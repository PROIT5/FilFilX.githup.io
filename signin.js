const email =
    document.getElementById('email')

const password =
    document.getElementById('password')


const form =
    document.getElementById('form')

const errorElement =
    document.getElementById('error')

form.addEventListener('submit', (e) => {

    let messages = []
    if (email.value === '' || email.value == null) {
        messages.push('Email is required')
    }

    if (password.value.lenght <= 6 || password.value >= 20) {
        messages.push('Password must be longer than 6 charachtes or less than 20 charachtes ')
    }


})
