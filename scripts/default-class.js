export default class{
    constructor(name){
        this.name = name;
    }

    sayHi(name){
        console.info(`Hi, my name is ${this.name}`);
    }
}