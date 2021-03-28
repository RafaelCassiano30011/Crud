import listaDeParent from './crud.js'

const $inputs = document.querySelectorAll('.input')
const $button = document.querySelector('.button')
const $form = document.querySelector('.form')





$form.addEventListener('submit', (event) => {
    event.preventDefault()
    for (const input of $inputs) {
        input.value = ''
    }
    const novoParent = {
        id: '',
        name: '',
        idade: '',
    }

    novoParent.id = parseInt($inputs[0].value)
    novoParent.name = $inputs[1].value
    novoParent.idade = parseInt($inputs[2].value)


    listaDeParent.create(novoParent)


    console.log(novoParent)
    return
})



const parentes = listaDeParent.read()
const parent = listaDeParent.readbyid()