const token = localStorage.getItem('token')
let userName = document.querySelector('#user p')
let explore = document.querySelector('.explore')
let categoriesDiv = document.querySelector('.categories')
let categoriesList = document.querySelector('.categories ul')
let userDiv = document.querySelector('#user')
let studentPanel = document.querySelector('#student-panel')
let teacherPanel = document.querySelector("#teacher-panel")

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
    if (response.user.type == 'Teacher') {
        let bottomCreate = document.querySelector('#create-course')
        bottomCreate.style.display = 'block'
        studentPanel.style.display = 'none'
        teacherPanel.style.display = 'block'
    }

}

async function addCategories() {
    // Categorias Header
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

    //Categorias selecionar

    let selectCoursecategory = document.querySelector('#course-category')

    response.categories.forEach((item) => {
        let options = document.createElement('option')
        options.append(item.name)
        selectCoursecategory.appendChild(options)
    })
}


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
    const url = `http://localhost:4000/courses/teacher`

    const user = await fetch(url, {
        headers: {
            'Content-type': 'Application/json',
            'Authorization': `bearer ${token}`
        }
    })

    const response = await user.json()

    let sectionTeacher = document.querySelector('#teacher-panel')
    let listCourse = document.createElement('div')
    response.Courses.forEach((item) => {

        // Criando elementos
        listCourse.classList.add('courses-list')
        let cardCourse = document.createElement('div')
        cardCourse.classList.add('course-card')
        let title = document.createElement('h3')
        title.innerHTML = item.name
        let buttonAddModule = document.createElement('button')
        buttonAddModule.classList.add('add-module-btn')
        buttonAddModule.innerHTML = 'Adicionar Módulo'
        let buttonAddVideo = document.createElement('button')
        buttonAddVideo.classList.add('add-video-btn')
        buttonAddVideo.innerHTML = 'Adicionar Vídeo'
        let moduleList = document.createElement('ul')
        moduleList.classList.add('modules-list')
        let list = document.createElement('li')

        // Ordena os módulos pelo índice original (posição no array)
        item.module.forEach((mod, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${mod.name}`; // adiciona número manualmente
            moduleList.appendChild(li);
        });

        //Adicionando Elementos
        moduleList.appendChild(list)
        cardCourse.appendChild(title)
        cardCourse.appendChild(buttonAddModule)
        cardCourse.appendChild(buttonAddVideo)
        cardCourse.appendChild(moduleList)
        listCourse.appendChild(cardCourse)
        sectionTeacher.appendChild(listCourse)


        //Ações Botões

        buttonAddModule.addEventListener('click', () => {
            console.log(item)
        })
    })
}



changeName()
addCategories()
courseInfo()

