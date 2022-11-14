// whileloop.js
/*
let i =0;
while(i < 10) {
    
    console.log(i);
    i++;

}

console.clear();

let isOK = true;

while (isOK){
    let random_val = parseInt(Math.random()*10);
    console.log(random_val);
    if(random_val %2 == 0){
        break;
    }
}

let sum = 0;
while(isOK){
    sum += parseInt(Math.random()*10);
    console.log(sum);
    if (sum>100){
        break;
    }
}

while(true){
    let msg =prompt("문자입력하세요: ");
    console.log(msg);
    if(msg == "stop"){
        break;
    }
}

console.log('end of while')

*/

/*
while(true){
  
    let a =prompt("a 값 입력");
    console.log(a);

    let oper = prompt("연산자 입력");
    console.log(oper);

    let b =prompt("b 값 입력");
    console.log(b);


    if(oper == "*"){
        document.write(a+"X"+b+"="+ (a*b));  
    }
    else if(oper == "+"){
        document.write(a+"+"+b+"="+ (a+b));  
    }
    else if(oper == "/"){
        document.write(a+"/"+b+"="+ (a/b));  
    }
    else if(oper == "-"){
        document.write(a+"-"+b+"="+ (a-b));  
    }

    exit = confirm("종료하려면 확인버튼, 계속하려면 취소버튼")
    if (exit == 1){
        break;
    }
}

*/

let random_val = parseInt(Math.random()*100);

console.log(random_val);

while(true){
    
    let user_num = prompt("아무거나 입력 ㄱㄱ");

    if(user_num == random_val){
        console.log("같은 숫자 입니다!");
        break;
    }

    else if(user_num > random_val){
        confirm("더 작습니다");
    }

    else if(user_num < random_val){
        confirm("더 큽니다");
    }

    else if(user_num == 999){
        break;
    }
}


