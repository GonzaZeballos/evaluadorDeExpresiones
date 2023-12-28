function solve() {
    const expression = document.getElementById('expression').value;

    try {
        let x;
        if (expression.includes('x')) {
            const variableValue = prompt('Ingrese el valor de la variable (x):');
            x = parseFloat(variableValue);
        } else {
            x = null;
        }

        const result = eval(expression.replace(/x/g, `(${x})`));

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p>Paso 1: ${
            x !== null ? `Sustituimos x por ${x}` : 'No hay variable x en la expresión'
        }</p>`;
        resultDiv.innerHTML += `<p>Paso 2: ${expression} = ${expression.replace(/x/g, `(${x})`)} </p>`;
        resultDiv.innerHTML += `<p>Resultado Final: ${expression} = ${result}</p>`;

        // Verificar si el resultado es un número entero
        if (Number.isInteger(result)) {
            resultDiv.innerHTML += `<p>Tipo de Resultado: int</p>`;
        } else {
            resultDiv.innerHTML += `<p>Tipo de Resultado: double</p>`;
        }

    } catch (error) {
        alert('Error al resolver la expresión. Asegúrese de ingresar una expresión válida.');
    }
}
