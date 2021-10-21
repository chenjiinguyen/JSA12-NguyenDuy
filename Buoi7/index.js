// ES5
let multiTestEs5 = function(a, b) {
    return a * b;
};

function multiTestEs5(a,b){
    return a * b;
}
  
// ES6
let multiTestEs6 = (a, b) => { return a * b };

// Chu Y 1
let xxx = a => {return a * 2};

// Chu Y 2
let zzz = (a,b) => a * b;

// Chu Y 3
let zzzz = (a,b) => ({
    name: a,
    age: b,
});


/**
 * Tính diện tích hình chữ nhật
 */
function abcd(cd,cr){
    return cd * cr;
}


// i++ vs ++i
i = 5

// Gán -> tự tăng
// a = i = 5
// i = i+1 = 6
a = i++;

// Tự tăng -> gán
++i;
// i = i+1 = 6
// a = i = 6
