# TypeScript Tutorial

#### Data Types in TypeScript:
**Built-in types**
* any
* number
* boolean
* string
* void
* null
* undefined

**User-defined types**
* array
* enum
* interface
* class
* other


#### Variable in TypeScript:
**Syntax**

`let variableName: dataType = value;`

**Example**
``` 
let a: number = 56;
let b: string = 'hello';
let c: boolean = true;
let d: number[] = [];
let e: any = 1; 
```

#### Enum in TypeScript

**Example**
```
enum Color { Red = 0, Green = 1, Blue = 2 };
let backgroundColor = Color.Red
```

#### Functions in TypeScript

**Syntax**
```
function function_name(param1[:type],param2[:type] = default_value) { 
}
```
**Example**
```
function calc_discount(price: number, rate: number = 0.50){
    let discount = price  * rate
    console.log("Discount amount: " + discount)
}

calc_discount(20)
calc_discount(20, 0.30)
```

#### TypeScript - Interfaces
**Syntax**
```
interface interface_name { 
}
```
**Example**
```
interface Person {
    fname: string,
    lname: string,
    sayHi?: () => string,
    greeting: (name: string) => string
}

let customer: Person = {
    fname: 'Saleem',
    lname: 'Raza',
    sayHi: () => 'Hi there!',
    greeting: (name) => 'hello' + name
}

console.log(customer.fname)
console.log(customer.lname)
console.log(customer.sayHi())
console.log(customer.greeting('Saleem'))
```

### Class and Object in Typescript

**Fields** − A field is any variable declared in a class. Fields represent data pertaining to objects

**Constructors** − Responsible for allocating memory for the objects of the class

**Functions** − Functions represent actions an object can take. They are also at times referred to as methods

**Syntax**
```
class class_name { 
   //class scope 
}

class child_class_name extends parent_class_name{
     //class scope 
}

let object_name = new class_name([ arguments ])

```
**Example**
```
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

```