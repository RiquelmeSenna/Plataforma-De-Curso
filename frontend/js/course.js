const token = localStorage.getItem('token')
let userName = document.querySelector('#user p')
let explore = document.querySelector('.explore')
let categoriesDiv = document.querySelector('.categories')
let categoriesList = document.querySelector('.categories ul')
let userDiv = document.querySelector('#user')


userDiv.addEventListener('click', () => {
    window.location.replace('../../pages/home/user.html')
})

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
            const url = `http://localhost:4000/categories/find/${list.innerHTML}`

            const category = await fetch(url)

            const response = await category.json()
            if (response) {
                localStorage.setItem('category', JSON.stringify(response))
                window.location.replace('../home/categories.html')
            }
        })
    })
}

addCategories()

explore.addEventListener('mouseover', () => {
    categoriesDiv.style.marginTop = '0'
})

explore.addEventListener('mouseout', () => {
    categoriesDiv.style.marginTop = '-150vh'
})

categoriesDiv.addEventListener('mouseover', () => {
    categoriesDiv.style.marginTop = '0'
})

categoriesDiv.addEventListener('mouseout', () => {
    categoriesDiv.style.marginTop = '-150vh'
})



async function courseInfo() {
    const courseId = localStorage.getItem('idCourse')
    const url = `http://localhost:4000/courses/${courseId}`

    const course = await fetch(url)
    const response = await course.json()

    const courseCategory = document.querySelector('.course-category-badge')
    const courseTittle = document.querySelector('.course-title')
    const courseDescription = document.querySelector('.course-description')
    const coursePrice = document.querySelector('.course-price')
    const listModule = document.querySelector('.modules-list')

    response.course.module.forEach((item, index) => {
        //Criar os elementos
        const li = document.createElement('li')
        const number = document.createElement('div')
        number.innerHTML = index + 1
        number.classList.add('module-number')
        const divText = document.createElement('div')
        const title = document.createElement('span')
        title.classList.add('module-title')
        const description = document.createElement('span')
        description.classList.add('module-desc')

        //Colocar os textos nos elementos

        title.innerHTML = item.name
        description.innerHTML = item.description

        //Colocar um elemento dentro do outro

        divText.appendChild(title)
        divText.appendChild(description)
        li.appendChild(number)
        li.appendChild(divText)
        listModule.appendChild(li)

    })

    courseCategory.innerHTML = response.course.category.name
    courseTittle.innerHTML = response.course.name
    console.log(response.course.description)
    courseDescription.innerHTML = response.course.description
    coursePrice.innerHTML = `R$ ${response.course.price},00`
}



courseInfo()
changeName()