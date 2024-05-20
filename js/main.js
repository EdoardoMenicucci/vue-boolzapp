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
                    name: 'Roberta',
                    avatar: './img/8.jpg',
                    visible: true,
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
                    visible: true,
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
                    visible: true,
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
                    name: 'Mario L.',
                    avatar: './img/4.jpg',
                    visible: true,
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
                    visible: true,
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
                    name: 'Federica',
                    avatar: './img/6.jpg',
                    visible: true,
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
                    visible: true,
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
            //ARRAY DI RISPOSTE (SCELTE CASUALMENTE)
            replyArray: [
                'ciao sto bene',
                'oggi devo andare dal parrucchiere',
                'mi fa male la pancia, lo sai?',
                'andiamo a fare serata?',
                'ciao!',
                'oggi sono impegnato, vado al bar con gli amici!',
                'ti va di andare al lago?',
                'mi fa male la testa scusami',
                'oggi vado dal dentista!',
                'purtoppo sono in lutto',
            ],

            //--------------------------------------------------------------------//
            // TENGO TRACCIA DEL CONTATTO ATTUALMENTE CLICCATO
            clickedContact: 0,
            // CREO UN ARRAY DI OGGETTI CONTENENTI MESSAGGI DATA E STATO
            msgUserSelected: [],
            // DIVIDO LA DATA DALL'ARRAY DI OGGETTI DI MESSAGGI
            // VARIABILE APPOGGIO ULTIMO MESSAGGIO DATA E ORA
            lastDate: '', //STRINGA DATA ULTIMO MESSAGGIO RICEVUTO DALL UTENTE
            // DIVIDO CON SPLIT LA DATA (TARSFORMO LA STRINGA IN UN ARRAY DI 2 ELEMENTI)
            dateSplitted: [], //ARRAY IN POSIZIONE 0 GIORNO/ANNO; IN POSIZIONE 1 MINUTI/ORA;
            // USO LO SLICE PER PRENDERE SOLO ORA E MINUTI
            //ULTIMI MESSAGGI INVIATI DAGLI UTENTI ARRAY
            LastRecivedMsgs: [],
            // TUTTE LE DATE DEI MESSAGGI DEGLI ULTIMI UTENTI
            lastDataStart: [],
            // V-MODEL USER MSG (ATTENZIONE PROXY)
            userMsg: '',
            // USER MSG DA STAMPARE (CHE NON SI AGGIORNA AD OGNI CAMBIO DI CARATTERE)
            userMsgStable: '',
            // BONUS CREO IL TEMPO REALE DA INSERIRE QUANDO MANDO UN MSG
            time: '',
            // BONUS CREO MESI ANNI E GIORNI DA INSERIRE
            day: '',
            // V-MODEL SEARCH BAR
            userSearch: '',
            // USER-SEARCH STABLE
            userSearchStable: '',
            // CONTATTI FILTRATI
            filteredContacts: [], // Array per conservare i contatti filtrati
            filteredChat: function () {
                return this.contacts.filter((contacts) => {
                    return contacts.name.match(this.search)
                })
            },
        }
    },
    methods: {
        // Click al contatto ricavo il numero array e oggetto
        clickOnContact(contatto, i, contacts) {
            // SALVO NEI DATA IL NUMERO DEL CONTATTO CLICCATO
            this.clickedContact = i
            console.log(contatto);
            // SALVO IN UNA VARIABILE I MESSAGGI DEL CONTATTO CLICCATO
            this.msgUserSelected = contatto.messages
            //RICHIAMO LA FUNZIONE CHE LAVORA OGNI OGGETTO MESSAGES NELL ARRAY
            this.separationDateMsg();

        },
        // Separo la data dai messagi e stati solo per la sezione messaggi visibili//
        separationDateMsg() {
            // PUSHO IN UN ARRAY STATI E DATA
            for (let i = 0; i < this.msgUserSelected.length; i++) {
                const element = this.msgUserSelected[i];
                console.log();
                // DIVIDO LA DATA DALL' ORARIO
                this.dateSplitted = element.date.split(' ');
                //DIVIDO L'ORARIO ORA MINUTI SECONDI CREANDO UN ARRAY
                let secondsMinutesHours = this.dateSplitted[1].split(':')
                //MOSTRO SOLTANTO MINUTI E ORE 
                let minuteHours = secondsMinutesHours[0] + ':' + secondsMinutesHours[1]
                // console.log(minuteHours);
                // RICAVO L'ULTIMO MESSAGGIO E L'ULTIMA DATA DA OGNI CONTATTO
                if (element.status == 'sent') {
                    this.lastDate = minuteHours
                    this.lastRecivedMsg = element.message
                };

            };
        },
        // FUNZIONE CHE AL CARICAMENTO DELLA PAGINA CARICO TUTTE LE ORE E ULTIMI MSG RICEVUTI
        lastMsgAtLoading() {
            // RESET
            this.lastDataStart = [];
            this.LastRecivedMsgs = [];

            // CICLO FOR PER TUTTI I CONTATTI/ UPDATE DATA E ORA E TUTTI GLI ULTIMI MESSAGGI
            for (let i = 0; i < this.contacts.length; i++) {
                const element = this.contacts[i];
                // console.log(element);
                // console.log(element.messages);
                // PRENDO L'ULTIMO MESSAGGIO PER OGNI CHAT
                let lastMessage = element.messages[(element.messages.length - 1)].message
                // console.log('last message', lastMessage);
                //PUSHO IN UN ARRAY NEI DATA TUTTI GLI ULTIMI MESSAGGI
                this.LastRecivedMsgs.push(lastMessage);
                // PRENDO L'ULTIMA DATA DI OGNI CONVERSAZIONE
                let lastData = element.messages[(element.messages.length - 1)].date
                // DIVIDO LA DATA E L'ORARIO DALLO SPAZIO CREANDO UN ARRAY
                let dateSplit = lastData.split(' ')
                //DIVIDO L'ORARIO ORA MINUTI SECONDI
                let secondsMinutesHours = dateSplit[1].split(':');
                //CREO UNA VARIABILE CON SOLTANTO LE ORE E I MINUTI
                let dataOnlyMinutHours = secondsMinutesHours[0] + ':' + secondsMinutesHours[1];
                // PUSHO IL DATO IN UNA VARIABILE NEI DATA DI VUEJS
                this.lastDataStart.push(dataOnlyMinutHours)
                // console.log('dati ultimo messaggio a sinistra', this.lastDataStart);
                // console.log(this.lastDataStart);
            }
        },
        // DATE SPLITTING FOR CURRENT MESSAGES
        dateSplitting(elemento) {
            let x = elemento.date.split(' ');
            let y = x[1].slice(0, 5)
            return y
        },

        // INVIO DEI MESSAGGI NELLE CHAT
        sendMsg() {
            this.getCurrentTimeDay();
            // this.getCurrentDay();
            // SALVO AL PRESS INVIO IL V-MODEL IN UNA VARIABILE STABILE PER POTER ELIMINARE
            this.userMsgStable = this.userMsg
            // SVUOTO IL V-MODEL INPUT UTENTE
            this.userMsg = ''
            console.log(this.userMsgStable);
            //SALVO IN UNA VARIABILE 
            let selectedContact = this.contacts[this.clickedContact].messages;
            console.log(selectedContact);
            selectedContact.push({
                date: this.day + ` ` + this.time,
                message: this.userMsgStable,
                status: 'received'
            })
            // this.LastRecivedMsgs[this.clickedContact] = this.userMsgStable;
            // TESTO ORA LEGALE
            this.randomResponse();
            this.lastMsgAtLoading();
            console.log(this.contacts[this.clickedContact].messages);
        },

        // FUNZIONE RISPOSTA RANDOM

        randomResponse() {
            setTimeout(() => {
                this.getCurrentTimeDay();
                // this.getCurrentDay();
                this.lastMsgAtLoading();
                this.contacts[this.clickedContact].messages.push({
                    date: this.day + ` ` + this.time,
                    message: this.replyArray[this.randomReplyNumb()],
                    status: 'sent'
                })
                this.LastRecivedMsgs[this.clickedContact] = this.contacts[this.clickedContact].messages[(this.contacts[this.clickedContact].messages.length - 1)].message;
                console.log(this.contacts[this.clickedContact].messages[(this.contacts[this.clickedContact].messages.length - 1)].date);
                // this.lastDataStart[this.clickedContact] = this.contacts[this.clickedContact].messages[(this.contacts[this.clickedContact].messages.length - 1)].date.split(' ')[1];
                this.contacts[this.clickedContact].online = true;
                console.log(this.contacts[this.clickedContact]);
                // SPLITTO LA DATA
                let dateSplit = this.contacts[this.clickedContact].messages[(this.contacts[this.clickedContact].messages.length - 1)].date.split(' ')
                //DIVIDO L'ORARIO ORA MINUTI SECONDI
                let secondsMinutesHours = dateSplit[1].split(':');
                //CREO UNA VARIABILE CON SOLTANTO LE ORE E I MINUTI
                let dataOnlyMinutHours = secondsMinutesHours[0] + ':' + secondsMinutesHours[1];
                this.lastDataStart[this.clickedContact] = dataOnlyMinutHours;
                this.contacts[this.clickedContact].today = true;
            }, this.getRndInteger(2000, 20000));
            setTimeout(() => {
                this.contacts[this.clickedContact].online = false;
            }, this.getRndInteger(5000, 30000));
        },

        //GENERO UN NUMERO TRA UN MIN E MAX COMPRESO TRA LA LUNGHEZZA DELL'ARRAY DELLE RISPOSTE
        randomReplyNumb() {
            return Math.floor(Math.random() * this.replyArray.length)
        },
        // PRENDO DATA E ORE MINUTI SOLUZIONE AFFIDABILE SENZA RANZARE VIA GLI ZERI!!
        getCurrentTimeDay() {
            const now = new Date();
            let oreMinuti = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
            console.log(oreMinuti);
            this.time = oreMinuti
            let data = now.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
            console.log(data);
            this.day = data
        },

        // IN QUESTO MODO MI RANZAVA VIA GLI ZERI QUINDI HO CERCATO UN ALTRA SOLUZIONE //

        // BONUS OTTENGO L'ORA ATTUALE 1 TENTATIVO 
        // getCurrentTime() {
        //     const d = new Date();
        //     let hour = d.getHours();
        //     let minutes = d.getMinutes();
        //     // console.log(hour, minutes, seconds);
        //     this.time = hour + ':' + minutes
        //     // console.log(this.time);
        // },

        // BONUS OTTENGO LA GIORNATA ATTUALE 1 TENTATIVO
        // getCurrentDay() {
        //     const d = new Date();
        //     let year = d.getFullYear();
        //     let month = d.getMonth();
        //     let day = d.getDay()
        //     this.day = day + '/' + month + '/' + year;
        // },

        //-----------------------------------------------------------------------------//

        // BONUS GENERO UN NUMERO CASUALE IN MODO DA SIMULARE IL TIMING DELLA RISPOSTA UMANA

        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },

        // FUNZIONE PER SEARCHBAR (DEVO METTERE IN LOWERCASE I CARATTERI ALTRIMENTI NON COMBACIANO ALLA RICERCA)
        //PREMO INVIO E MI METTE NELLA CHAT SELEZIONATA BONUS-------
        userLowerSearch() {
            // USO IL V-MODEL PER ASSEGNARLO AD UNA VARIABILE STABILE PER POI SVUOTARE LA SEARCH BAR
            this.userSearchStable = this.userSearch
            this.userSearch = ''
            for (let i = 0; i < this.contacts.length; i++) {
                const element = this.contacts[i];
                let elementName = element.name
                // SE IL NOME INCLUDE SPAZI LO DIVIDO PER POTERLO CERCARE SOLO TRAMITE NOME
                if (elementName.includes(' ')) {
                    let splittedName = elementName.split(' ')
                    elementName = splittedName[0]
                    console.log(elementName);
                };
                // TRASFORMO TUTTI I NOMI IN LOWERCASE
                const elementNameLowerCase = elementName.toLowerCase();
                //SE IL NOME CERCATO E' COMPRESO TRA I CONTATTI LO METTO IN EVIDENZA E MOSTRO I MESSAGGI COME FOSSE CLICCATO
                if (this.userSearchStable == elementNameLowerCase) {
                    this.clickedContact = i
                    this.msgUserSelected = element.messages
                }
            }
        },

        // TOLGO LA VISIBILITA AI CONATTI CHE NON CONTENGONO LE LETTERE INSERITE NELLA SEARCHBAR 4-5 MILESTONE
        userSearchVisibility() {
            for (let i = 0; i < this.contacts.length; i++) {
                const contatto = this.contacts[i];
                let elementName = contatto.name
                // TRASFORMO TUTTI I NOMI IN LOWERCASE
                let elementNameLowerCase = elementName.toLowerCase();
                if (elementNameLowerCase.startsWith(this.userSearch)) {
                    contatto.visible = true
                } else {
                    contatto.visible = false
                }
            }
        },

        debug() {
            // console.log(this.userSearchStable);
            // console.log(this.userSearch);
            // console.log(this.clickedContact);
            // console.log();
            // console.log();
            // this.getCurrentTimeDay()
            // if (this.contacts[1].name.includes('Rob')) {
            //     console.log('contiene');
            // }
        },









    },
    mounted() {
        console.log('app vue montanta correttamente')
        this.msgUserSelected = this.contacts[this.clickedContact].messages;
        this.separationDateMsg();
        this.lastMsgAtLoading();
    }
},

).mount('#app')


// // CHIAMATA axios
// axios.get('url da inserire').then((result) => {

// })