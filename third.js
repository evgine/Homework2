//3.Տրված է իրական թվերի հաջորդականություն։ Տպել այդ հաջորդականության մեծագույն տարրը և նրա կարգահամարը (index)։ 

let arr = [0,9,3,5,7,56789];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max){
        max = arr[i]
    }
}
console.log(max,arr.indexOf(max));
