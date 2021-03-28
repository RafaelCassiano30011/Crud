const listaDeParent = {
    data: [{
            id: 1,
            name: 'Rafael',
            idade: 19,
        },
        {
            id: 2,
            name: 'Jessica',
            idade: 20,
        }
    ],
    create: (parent) => {
        listaDeParent.data.push(parent)
    },
    read: () => {
        return listaDeParent.data
    },
    readbyid: (id) => {
        for (const parente of listaDeParent.data) {

            if (id === parente.id) {
                return parente

            }
        }
    },
}
export default listaDeParent;