// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     sayHello(){
//         return this.name;
//     }
// }

// let p1=new Person("anmol",25);
// let p2=new Person("luckky",8);
// let p3=new Person("Raj",14);




// -------------------------------------------


class Car{
    constructor(name,color,price){
        this.name=name;
        this.color=color;
        this.price=price;
    }

    getName(){
        return this.name;
    }

    get getPrice(){
        return this.price;
    }
    set setPrice(newPrice){
        this.price=newPrice;
    }
}

class RacingCar extends car{
    constructor(name,color,price,maxSpeed,isDisc){
        super(name,color,price);//calling parent class constructor
        this.maxSpeed=maxSpeed;
        this.isDisc=isDisc;
    }
    get getMaxSpeed(){
        return this.maxSpeed;
    }
}

let c1=new Car("alto","white",1223432);

let rc=new RacingCar("bmw","blue",12345540094,360,true);
 