import Axios from "axios";

//initial state
const state = {
    all: []
}

//getters
const getters = {}

//actions
const actions = {
    // commit is to perform some action
    getAllProducts ({ commit })
    {
        Axios.get("http://localhost:5000/api/products").then(function (response) {
            var products = response.data.prodcuts;
            for (let i = 0; i < products.length; i++) {
                commit('setProducts',products)
            }
        })
    }
}

const mutations = {
    setProducts(state, products)
    {
        state.all = products
    },
    decrementProductInventroy(state,{id}){
        const product = state.all.find(product => product.id === id)
        product.inventory --
    }
}

export default {
    namespaced : true ,
    state,
    getters,
    actions,
    mutations
}
