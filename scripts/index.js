import listaDeParent from './crud.js'
import craterLi from './criarLi.js'

const $inputs = document.querySelectorAll('.input')
const $button = document.querySelector('.button')
const $form = document.querySelector('.form-creat')
const $formId = document.querySelector('.form-read-id')
const $inputId = document.querySelector('.input-id')

const $container = document.querySelector('.container')
const $ul = document.querySelector('.ul-box')



$form.addEventListener('submit', (event) => {
    event.preventDefault()
    let novoParent = {
        id: '',
        name: '',
        idade: '',
    }

    novoParent.id = parseInt($inputs[0].value)
    novoParent.name = $inputs[1].value
    novoParent.idade = parseInt($inputs[2].value)


    listaDeParent.create(novoParent)

    for (const input of $inputs) {
        input.value = ''
    }
    craterLi()
    console.log(parentes)
    return
})



$formId.addEventListener('submit', (event) => {
    event.preventDefault()
    let id = ''

    id = parseInt($inputId.value)

    const parent = listaDeParent.readbyid(id)
    const li = `   <li class="li">
    <Span class="span-id">ID ${parent.id}</Span>
    <span class="span-nome">Nome ${parent.name}</span>
    <span class="span-idade">Idade ${parent.idade}</span>
    </li>`

    $ul.innerHTML = li
})



const parent = listaDeParent.readbyid()