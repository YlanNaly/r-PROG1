/**
 * isBearable function
 */
const isBearable = (size,array) =>{
    let bearable = true;
    if(size > 0 && array.length > 0){
        let tmp = array.reduce((a,b)=>a+b)
        if (tmp > size){
            bearable = false;
        }
        else if(tmp <= size){
            bearable = true;
        }
    }
    return bearable;
}
module.exports = isBearable;