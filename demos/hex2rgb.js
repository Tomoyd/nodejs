function hex2rgb(hex) {
    let pattern6=/^#[0-9a-fA-F]{6}$/;
    let flag6=pattern6.test(hex);
    let pattern3=/^#[0-9a-fA-F]{3}$/;
    let flag3=pattern3.test(hex);
    if(flag6){
        let first=hex.substring(1,3);
        let two=hex.substring(3,5);
        let three=hex.substring(5,7)
        let firstRgb=hex2toNumber(first);
        let twoRgb=hex2toNumber(two);
        let threeRgb=hex2toNumber(three);
        return "rgb("+firstRgb+","+twoRgb+","+threeRgb+")"
    }else if(flag3){
        let first=hex[1]+hex[1];
        let two=hex[2]+hex[2];
        let three=hex[3]+hex[3];
        let firstRgb=hex2toNumber(first);
        let twoRgb=hex2toNumber(two);
        let threeRgb=hex2toNumber(three);
        return "rgb("+firstRgb+","+twoRgb+","+threeRgb+")"
    }else{
        return hex
    }
}
function hex2toNumber(hex2){
    return parseInt(parseInt("0x"+hex2).toString(10));
}
function isSupportHTML5() {
    return !!localStorage
}
console.log(isSupportHTML5())
