/**
 * 3. Construct a Vehicle class, that inherits the classes, "plane", "car", "Train", with the inherited methods run, stop, and action, the action method must change with the children,
// Ex: car drive, avion fly, train travel

*/

class Vehicle{

    constructor(name){
        this._name= name;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name=name;
    }


    run(){
        console.log("El vehiculo ha arrancado");
    }

    stop(){
        console.log("El vehiculo se ha detenido");
    }

    action(){
        return "El "+ this.name + "esta:";
    }
    
    
}




class plane extends Vehicle{
    
    constructor(name){
        super(name);

    }

    action(){
        //let mensaje("El "+ this.name + "esta:"+"volando");
        return "El: "+ this.name + " esta:"+"volando";
    }

}

class car extends Vehicle{
    
    constructor(name){
        super(name);

    }

    action(){
        //let mensaje("El "+ this.name + "esta:"+"volando");
        return "El: "+ this.name + " esta:"+" conduciendo";
    }

}

class train extends Vehicle{
    
    constructor(name){
        super(name);

    }

    action(){
        //let mensaje("El "+ this.name + "esta:"+"volando");
        return "El: "+ this.name + " esta:"+" viajando";
    }

}

let resultado = new plane("avion");
console.log(resultado.action());

let resultado2 = new car("carro");
console.log(resultado2.action());

let resultado3 = new train("tren");
console.log(resultado3.action());