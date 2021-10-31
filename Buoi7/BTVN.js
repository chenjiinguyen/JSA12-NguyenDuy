/**
 * Tính phương trình bậc 2
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * @returns 
 */
function PTB2(a,b,c){
    let result = {
        message: "",
        result: [],
    }
    let delta = b**2 / (-4 * a*c);
    if(delta < 0){
        result.message = "Phương trình vô nghiệm";
    }else if(delta == 0){
        x1 = -b/2*a
        result.message = "Phương trình có một nghiệm";
        result.result = [x1];
    }else{
        x1 = (-b+delta)/2*a;
        x2 = (-b-delta)/2*a;
        result.message = "Phương trình có hai nghiệm phân biệt";
        result.result = [x1,x2];
    }
    return result;
}

