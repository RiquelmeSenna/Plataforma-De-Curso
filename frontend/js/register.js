let nameInput = document.getElementsByName('name')[0]
let emailInput = document.getElementsByName('email')[0]
let cpfInput = document.getElementsByName('cpf')[0]
let passwordInput = document.getElementsByName('password')[0]
let button = document.querySelector('#btn-register')



button.addEventListener('click', async () => {
    let url = 'http://localhost:4000/auth/signup'

    let dadosDoUsuario = {
        cpf: cpfInput.value,
        email: emailInput.value,
        name: nameInput.value,
        password: passwordInput.value,
        type: 'Student'
    }

    try {
        let register = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosDoUsuario)
        })

        let response = await register.json()

        console.log(response.user)

        if (response.user) {

        }

    } catch (error) {

    }
})