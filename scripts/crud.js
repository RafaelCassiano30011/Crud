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
        },
    ],
    create: (parent) => {
        listaDeParent.data.push(parent)
    },
    read: () => {
        return listaDeParent.data
    },
    readbyid: (id) => {
        for (const parente of listaDeParent.read()) {

            if (id === parente.id) {
                return parente
            }
        }
    },
    update: (Parentid, data) => {
        const parentes = listaDeParent.read()

        const ListadeParentesUpdate = parentes.map((parent) => {

            if (Parentid === parent.id) {
                const novaListadeParentes = {...parent, ...data }

                return novaListadeParentes
            }
            return parent
        })
        return ListadeParentesUpdate
    },
    delete: (ParentId) => {
        const parentes = listaDeParent.read()

        const deletaParentDaLista = parentes.filter((parent) => {
            if (ParentId !== parent.id) return true
            return false
        })
        listaDeParent.data = deletaParentDaLista

    },

}
export default listaDeParent;