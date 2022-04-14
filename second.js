// 2.Տրված է ամբողջ թվերի հաջորդականություն։ Տպել այդ հաջորդականության դրական և կենտ տարրերի քանակը։ 

function hey (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0 && (arr[i] % 2 == 1)) {
        count += 1;
      }
  }
 return count;
}
console.log(hey([1,3,-6,-9,4]));
