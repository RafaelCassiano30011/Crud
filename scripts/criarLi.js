import listaDeParent from "./crud.js"

const $ul = document.querySelector('.ul-box')
const parentes = listaDeParent.read()
const craterLi = () => {
    $ul.innerHTML = ''

    for (const parent of parentes) {
        const li = `   <li class="li">
        <Span class="span-id">ID ${parent.id}</Span>
        <span class="span-nome">Nome ${parent.name}</span>
        <span class="span-idade">Idade ${parent.idade}</span>
    </li>`




        $ul.innerHTML += li

    }



}
craterLi()
export default craterLi