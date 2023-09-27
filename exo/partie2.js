/**
 * decodeMessage function
 */
const decodeMessage = (s, input) =>{
    let spliting = input.split("")
    let spliting_arr = input.split("")
    let result = [];
    let res = []
    for (let i = 0; i < spliting.length; i++) {
        result.push(spliting_arr.splice(s,s));
    }
    let j = 0;
    while(j < result.length){
        for (let i = 0; i < result[0].length; i++) {
            res.push(spliting_arr[0])
            spliting_arr.splice(0)
            res.push(result[i][j])
        }
        j++;
    }
    console.log(spliting)
    return res.join("");
}

module.exports = decodeMessage;

let input = "RFsarAbi1Dt4eeh";
let s = 3;
console.log(decodeMessage(s,input));