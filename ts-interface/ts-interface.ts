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