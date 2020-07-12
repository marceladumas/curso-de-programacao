const arr = [1, 2, 3, 4, 5];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    const elem = arr [i];
    console.log(elem);
}

console.log("");

//maneiras de fazer o for mais modernas
for (const elem of arr) {
    console.log(elem);
}

console.log("");

arr.forEach((elem, index) => {
    console.log(elem);
})

//para retornar

const newArr = arr.map ((elem, index) =>{
    return elem*2;
})
console.log(newArr);
//ou
const newArr2 = arr.map (elem => elem*2);
console.log (newArr2);
const filtered = arr.filter (elem => elem % 2 == 0);
console.log(filtered);