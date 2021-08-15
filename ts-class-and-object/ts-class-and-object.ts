class Car {
    engine: string

    constructor(engine: string) {
        this.engine = engine
    }

    disp(): void {
        console.log('Engine is: ' + this.engine)
    }
}

let obj = new Car('vvt')
obj.disp()


// Inheritance: TypeScript doesn’t support multiple inheritance.
class Shape { 
    Area:number 
    
    constructor(a:number) { 
       this.Area = a 
    } 
 } 
 
 class Circle extends Shape { 
    disp():void { 
       console.log("Area of the circle:  "+this.Area) 
    } 
 }
   
 var obj1 = new Circle(223); 
 obj1.disp()