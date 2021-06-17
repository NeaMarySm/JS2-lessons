const calculator = {
    a: null,
    b: null,
    init(arg1, arg2){
        this.a = arg1;
        this.b = arg2;
    },
    addition(){
        if (this.a === undefined || this.b === undefined){
            return 'один из аргументов не определен';
        } else if (isNaN(this.a) || isNaN(this.b)){
            return 'один из аргументов не является числом';
        }
        return this.a + this.b;
    },
    subtraction(){
        if (this.a === undefined || this.b === undefined){
            return 'один из аргументов не определен';
        } else if (isNaN(this.a) || isNaN(this.b)){
        return 'один из аргументов не является числом';
        }
        return this.a - this.b;
    },
    multiplication(){
        if ( this.a === null || this.b === null) {
            return null;
        } else if (this.a === undefined || this.b === undefined){
            return undefined;
        } else if (isNaN(this.a) || isNaN(this.b)){
            return 'один из аргументов не является числом';
        }
        return this.a * this.b;
    },
    division(){
        if ( this.a === null || this.b === null) {
            return null;
        } else if (this.a === undefined || this.b === undefined){
            return undefined;
        } else if (isNaN(this.a) || isNaN(this.b)){
            return 'один из аргументов не является числом';
        }
        return this.a / this.b;
    },

}

module.exports = {
    calculator: calculator,
}