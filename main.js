new Vue ({
    el: '#app',
    data: {
        Titolo: 'Lista da Fare',
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