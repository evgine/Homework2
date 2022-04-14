// 6.Գրել ծրագիր, որը զանգվածի բացասական էլեմենտները կտանի աջ կողմ, իսկ դրականները՝ ձախ։

let arr = [0,-4,7,-7,0,4,-7,-3];
let j = 0;
for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
          if (i != j)
            [arr[j], arr[i]] = [arr[i], arr[j]];
            j++;
          }
      }
let arr2 = []; 
for (let i = 0; i < arr.length; i++) {
     arr2.push(arr[i]);
}
console.log(arr2);
