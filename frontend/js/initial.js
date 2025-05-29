const token = localStorage.getItem('token')
let userName = document.querySelector('#user p')
let explore = document.querySelector('.explore')
let categoriesDiv = document.querySelector('.categories')
let categoriesList = document.querySelector('.categories ul')

async function changeName() {
    const url = 'http://localhost:4000/users/me'

    const user = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    const response = await user.json()
    userName.innerHTML = response.user.name

}

async function addCategories() {
    const url = 'http://localhost:4000/categories'

    const categories = await fetch(url)

    const response = await categories.json()

    response.categories.forEach((item) => {
        let list = document.createElement('li')
        list.append(item.name)
        categoriesList.appendChild(list)
        list.addEventListener('click', async () => {
            console.log(list.innerHTML)

            const url = `http://localhost:4000/categories/find/${list.innerHTML}`

            const category = await fetch(url)

            const response = await category.json()
            console.log(response)
        })
    })
}

addCategories()

changeName()

