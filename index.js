class Car{
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }
    
    // car acceleration method
    accelerate (){
        this.speed += 10
        console.log(speed)
    }

    // car brake method
     brake (){
        this.speed += 10
        console.log(speed)
    }

}

const ford = new Car('ford',120)

console.log(ford)




