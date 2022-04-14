// 5. Տրված զանգվածի համար հաշվել զանգվածի էլեմենտների միջին թվաբանականը։

let arr = [1,2,3,4,7,8];
let count1 = 0;
let count2 = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i]) {
    count1 += arr[i];
    count2++;
  }
}
console.log(parseInt(count1/count2));
