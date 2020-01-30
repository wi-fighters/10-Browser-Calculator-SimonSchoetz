(() => {
    const inputs = [...document.querySelectorAll("input:not(:last-child)")];
    const results = [...document.querySelectorAll("input:last-child")];


    const calc = () => {
        const addOne = parseFloat(inputs[0].value);
        const addTwo = parseFloat(inputs[1].value);
        results[0].value = addOne + addTwo;
        const subOne = parseFloat(inputs[2].value);
        const subTwo = parseFloat(inputs[3].value);
        results[1].value = subOne - subTwo;
        const multiOne = parseFloat(inputs[4].value);
        const multiTwo = parseFloat(inputs[5].value);
        results[2].value = multiOne * multiTwo;
        const divOne = parseFloat(inputs[6].value);
        const divTwo = parseFloat(inputs[7].value);
        results[3].value = divOne / divTwo;
        // console.log(resultAdd);

    }
    inputs.forEach(array => {
        array.addEventListener("change", calc);
    })
    // resultAddition.addEventListener("change", addition);
})();
