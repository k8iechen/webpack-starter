//Module
//use "export"
export class Dog { //name capitalized by convention
    //constructors
    constructor(id) {
        this.id = id;
    }
    //method
    identify(suffix) {
        return `Dog ID: ${this.id} ${suffix}`;
    }
}