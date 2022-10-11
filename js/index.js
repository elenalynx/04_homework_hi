// Визначити середнє арифметичне трьох чисел.
// Отримати від користувача через три prompt три числа і показати через alert середнє арифметичне цих чисел

let sum = 0;
let index = 0;

for (index; index < 3; index += 1) {
    let message = Number(prompt("Enter the number"));
    while (isNaN(message)){
        message = Number(prompt("Is not a number. Enter the number"));
    }
    sum += message;
}
alert(`The arithmetical mean: ${sum/index}`);