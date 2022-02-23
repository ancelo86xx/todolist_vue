new Vue ({
    el: '#app',
    data: {
        Titolo: 'Lista da Fare',
        saluto: 'Ciao Sono Angelo',
        giorno: new Date().getDate(),
        mese: new Date().getMonth()+1,
        anno: new Date ().getFullYear(),
        ora: new Date().getHours(),
        minuti: new Date().getMinutes(),
        secondi: new Date().getSeconds(),
        inputVal: '',
        lista: [
            {}
        ],
        

    },
    methods: {
        add: function (){
        if(this.inputVal){
            this.lista.push({
                elemento: this.inputVal
            })
            
        }
        this.inputVal = ''
        },   
       
    },
    
        
})