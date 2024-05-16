//Vue app

const { createApp } = Vue

createApp({
    data() {
        return {
            // TUTTE LE VARIABILI

        }
    },
    methods: {
        // TUTTE LE FUNZIONI
    },
    mounted() {
        console.log('app vue montanta correttamente')
        // CHIAMATA axios
        axios.get('url da inserire').then((result) => {

        })
    }
},

).mount('#app')