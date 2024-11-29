let inputs = [];

let count = Number(prompt('How many elements do you want in the Array?'));

for (let i = 0; i < count; i++) {
    inputs[i] = prompt(`Enter element ${i + 1}`);
}

function reverseAndSortArray(arr) {
    let reversedArray = arr.slice().reverse();
    let sortedArray = reversedArray.slice().sort();
    document.getElementById("output").innerHTML = `
        <p>Original Array: ${arr.join(", ")}</p>
        <p>Reversed Array: ${reversedArray.join(", ")}</p>
        <p>Sorted Array: ${sortedArray.join(", ")}</p>
    `;
}

reverseAndSortArray(inputs);
