console.log('Hello node js');

const argv = process.argv.slice(2)
console.log(argv);

const pin = process.env.PIN
console.log(pin);

if (argv == 'Tino' && pin == 14072014) {
    console.log('Welcome Tino'); 
} else {
    console.log('Access restricted');
}