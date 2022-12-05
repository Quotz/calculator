function add(a,b) {
    return a+b;
};

function subtract(a,b) {
    return a-b;
};

function divide(a,b) {
    return a/b;
};

function multiply(a,b) {
    return a*b;
};

function operate(a,operator,b) {
    let result = 0;
    a = Number(a);
    b = Number(b);

    switch (operator) {

        case '+': 
        result = add(a,b);
        break;

        case '-':
        result = subtract(a,b);
        break;

        case '/':
        result = divide(a,b);
        break;

        case '*':
        result = multiply(a,b);
        break;
    }

    return result;
};

function setDisplay(x) {
    let display = document.querySelector('#display');
    display.textContent = x
};

function clear() {
    firstOperand = 0;
    secondOperand = 0;
    operator = undefined;
    storedOperand = "";
    setDisplay(storedOperand);
    console.log("cleared");
};

let firstOperand;
let secondOperand;
let operator;
let storedOperand;

clear();

let numberList = document.querySelectorAll(".operand");
for (const number of numberList) {
    number.addEventListener('click', function(){
        let x = number.textContent;

        if (firstOperand!=undefined && operator!=undefined) {
            storedOperand += x;
            setDisplay(storedOperand);
            secondOperand = storedOperand;
            console.log(`Second operand set: ${secondOperand}`);    

        } else {
        storedOperand += x;
        setDisplay(storedOperand);
        firstOperand = storedOperand;
        console.log(`First Operand set: ${firstOperand}`);
        };
    });
};

let operatorList = document.querySelectorAll(".operator");
for (const i of operatorList) {
    i.addEventListener('click', function() {
        let x = i.textContent;

        if (x == "C") {
            clear();
            setDisplay(storedOperand);

        } else if (x == "=") {
            if (firstOperand && secondOperand && operator){
                let result = operate(firstOperand, operator, secondOperand);
                setDisplay(result);
                firstOperand = result;
                secondOperand = 0;
                operator = undefined;
                storedOperand = "";
            } else {
                clear()
                setDisplay("Error");
            };

        } else if (firstOperand && x!="=") {
            if (secondOperand && operator) {
                let result = operate(firstOperand, operator, secondOperand);
                setDisplay(result);
                firstOperand = result;
                operator = x;
                secondOperand = 0;
                storedOperand = "";
            } else {
                operator = x;
                storedOperand = "";
            };

        };
    });
};


//         // } else if (operator && secondOperand) {
//         //     let result = operate(firstOperand, operator, secondOperand);
//         //     setDisplay(result);
//         //     firstOperand = result;
//         //     secondOperand = undefined;
//         //     storedOperand = "";

//         //     if (x == "=") {
//         //         operator = "";
//         //         console.log ("operator =, no next operator")

//         //     } else {
//         //     operator = x;
//         //     console.log(`next operator ${x}`);
//         //     };

//         // } else {
//         // operator = x;
//         // firstOperand = Number(storedOperand);
//         // storedOperand = "";
//         // };
//     });
// };



















