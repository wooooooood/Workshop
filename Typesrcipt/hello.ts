var hello = "hello";
let hello2 = "hello2";
var timeoutPromise = new Promise(() => {
    setTimeout(() => {
        resolve("1sec");
    }, 1000);
});
timeoutPromise.then(console.log);
import add from './util';
const value = add(1,2);
console.log(value);
