var app = new Vue({
    el: "#app",
    data:{
        result: 0,
        number1: null,
        number2: null,
        operator:"plus"
    },
    methods: {
        calculer(){
            if (this.operator === "plus") {
                this.result = Number(this.number1)+Number(this.number2);
            }
            if (this.operator === "moins") {
                this.result = Number(this.number1)-Number(this.number2);
            }
        },
        reset(){
            this.number1 = "",
            this.number2 = "",
            this.operator= "plus"
        }
    },
})