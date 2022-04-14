// 7.Գրել ծրագիր, որը էկրանին կտպի զանգվածում ամենաշատը հանդիպած թիվը։

let arr=[3,3,9,4,3,4,9,9,3,];
let count1 = 0;
let count2 = 0;
let item;
for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
                if (arr[i] == arr[j]){
                  count2++;
                }
                if (count1 < count2) {
                  count1 = count2; 
                  item = arr[i];
                }
        }
        count2 = 0;
}
console.log(item);
