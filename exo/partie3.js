/**
 * TEMPETE
 */
const decodeObservations = (array) =>{
    let tempete = "TEMPETE";
    let normal = "NORMAL";
    let f_arr = array[0]
    let s_arr = array[1]
    let res = []
    for (let i = 0; i < f_arr.length; i++) {
        for (let j = 0; j < s_arr.length; j++) {
            if(f_arr[i] === s_arr[j] && f_arr.indexOf(f_arr[i]) >= s_arr.indexOf(f_arr[i])){
                res.push(f_arr[i])
            }
        }
    }
    if(res.length > 0){
        for (let i = 0; i < res.length; i++) {
            if(s_arr.indexOf(res[i]) < s_arr.indexOf(res[i+1]) && s_arr.indexOf(res[i+1]) < s_arr.indexOf(res[i+2])){
                return tempete+" "+res.join`` ;
            }
            else{
                return normal;
            }          
        }
    }
    return normal;
} 

module.exports = decodeObservations;

let arr = ["SmXwpKz" , "meXKZi"]
console.log(decodeObservations(arr));