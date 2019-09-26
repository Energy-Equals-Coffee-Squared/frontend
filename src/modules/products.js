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
        Axios.get("http://localhost:5000/api/Products").then(function (response) {
            var Products = response.data;
            console.log(users);
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
