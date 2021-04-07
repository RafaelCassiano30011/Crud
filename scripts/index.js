import listaDeParent from './crud.js'





const update = listaDeParent.update(2, { name: 'joao' })
const delet = listaDeParent.delete(1)


const listaDeParente = listaDeParent.read()