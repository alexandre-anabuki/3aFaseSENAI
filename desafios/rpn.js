
function evalRPN(expr) {
    const ops = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => {
            // divisão inteira ao estilo “trunc toward zero”
            const q = a / b;
            return q < 0 ? Math.ceil(q) : Math.floor(q);
        }
    };

    console.log(expr.split(/\s+/))

    const stack = [];
    for (const caracter of expr.split(/\s+/)) {
        if (caracter in ops) {
            if (stack.length < 2) throw new Error('Expressão inválida');
            const b = stack.pop();
            const a = stack.pop();
            stack.push(ops[caracter](a, b));
        } else {
            const num = Number(caracter);
            if (Number.isNaN(num)) throw new Error(`caracteren inválido: ${caracter}`);
            stack.push(num);
        }
    }
    if (stack.length !== 1) throw new Error('Expressão inválida');
    return stack[0];
}

evalRPN("5 1 2 + 4 * + 3 -")