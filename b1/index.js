const a = parseInt(prompt('Nhap vao so a: '));
const b = parseInt(prompt('Nhap vao so b: '));
const sum=0;

document.write(`So nguyen to trong khoang ${a} den ${b} la:`);


for (let i =a; i <= b; i++) {
    let flag = 0;

    
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    
    if (i > 1 && flag == 0) {
        document.write(i + ";");

    }
    
}

