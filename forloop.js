// forloop.js

// 초기값, 조건식, 증가치

/*

for(let i=1; i<=10; i++){
    console.log(i);
}

console.log("end of for");

*/



for(let a=1; a<=10; a++){
    if(a%2==0){
        console.log("3의 배수 출력 :"+a);
    }


    else if(a%2==1){
        console.log("홀수 출력 :"+a);
    }

}












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
    if (exit == 0){
        break;
    }
}

/*


let a = prompt("몇단 출력할까유");
console.log(a);
document.write('<table border=1>');

for(let b = 1; b< 10; b++){
    document.write('<tr>');
    console.log(a+"*"+b+"="+(a*b));
    document.write('<td>'+a+'</td><td>*</td><td>'+b+'</td><td>=</td>'+'<td>'+(a*b)+'</td>')
    document.write('</tr>');

    console.log(a+"X"+b+"="+ (a*b));
}

document.write('</table>');

*/