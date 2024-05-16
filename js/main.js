//Vue app

const { createApp } = Vue

createApp({
    data() {
        return {
            // TUTTI I CONTATTI E LE LORO INFO
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/8.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/2.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/3.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/4.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/5.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/6.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/7.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            // -------------------------------------------------------------------//
            // TENGO TRACCIA DEL CONTATTO ATTUALMENTE CLICCATO
            clickedContact: 0,
            // CREO UN ARRAY DI OGGETTI CONTENENTI MESSAGGI DATA E STATO
            msgClickedContact: [],
            // DIVIDO LA DATA
            clickedData: [],
            // VARIABILE APPOGGIO ULTIMO MESSAGGIO DATA E ORA
            lastMessage: '',
            // DIVIDO DATA DA ORA
            messageSplitted: '',
        }
    },
    methods: {
        // Click al contatto ricavo il numero array e oggetto
        clickOnContact(contatto, i, contacts) {
            // console.log('contatto cliccato', contatto);
            // console.log(contacts);
            // console.log('numero contatto', i);
            this.clickedContact = i
            // TOLGO LA VISIBILITA AD OGNI CLICK SU TUTTI I CONTATTI
            for (let i = 0; i < contacts.length; i++) {
                const element = contacts[i];
                element.visible = false
            }
            contatto.visible = true
            // SALVO IN UNA VARIABILE I MESSAGGI DEL CONTATTO CLICCATO
            this.msgClickedContact = contatto.messages
            // console.log(this.msgClickedContact);
            this.separationDate();
        },
        // Separo la data dai messagi e stati//
        separationDate() {
            // PUSHO IN UN ARRAY STATI E DATA
            for (let i = 0; i < this.msgClickedContact.length; i++) {
                const element = this.msgClickedContact[i];
                // console.log(element);
                if (element.status == 'sent') {
                    this.lastMessage = element.date
                }
                console.log(this.lastMessage);
                this.messageSplitted = this.lastMessage.split(' ');
                console.log(this.messageSplitted);
            }
        },


    },
    mounted() {
        console.log('app vue montanta correttamente')
        this.msgClickedContact = this.contacts[this.clickedContact].messages;
        this.separationDate();

    }
},

).mount('#app')


// // CHIAMATA axios
// axios.get('url da inserire').then((result) => {

// })