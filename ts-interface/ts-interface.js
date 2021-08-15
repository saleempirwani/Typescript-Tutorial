var customer = {
    fname: 'Saleem',
    lname: 'Raza',
    sayHi: function () { return 'Hi there!'; },
    greeting: function (name) { return 'hello' + name; }
};
console.log(customer.fname);
console.log(customer.lname);
console.log(customer.sayHi());
console.log(customer.greeting('Saleem'));
