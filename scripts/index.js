import listaDeParent from './crud.js'

const novoParent = {
    id: 3,
    name: 'Jose',
    idade: 30
}

listaDeParent.create(novoParent)


const parentes = listaDeParent.read()
const parent = listaDeParent.readbyid(3)
console.log(parent)