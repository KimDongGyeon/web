// 2022.11.14 javascript 수업
// operator.js

//+, -, *, /, %

let num1 = num2 = 10;

let result = num1 + num2;
console.log("result : " + (num1 + num2));

console.log("result : " + (num1 - num2));

console.log("10" - num1);

console.log(num1/num2);

console.log(num1%num2);

num1 = parseInt(Math.random() * 30); // 0~30 사이의 임의 난수 생성

num2 = parseInt(Math.random() * 50) +1 ; // 1~50 사이 임의 난수 생성

result = num1 + num2;


console.log("num1 : " +num1);
console.log("num2 : " +num2);
console.log("result : " + result);

if(result>=60){
    console.log("60보다 큰수입니다.")
}


//누적 연산

let sum = 0;

for(i=0;i<=3;i++){
    sum += num1; // sum = sum + num1; 와 동일 연산
}

console.log(typeof sum);
console.log(sum);


sum = "";
sum += "<span>hello</span>";
sum += "<span> world</span>";

console.log(typeof sum);
console.log(sum);

document.write(sum); // 값 출력

let fruits = ["Apple", "Banana", "Cherry"]
sum = "<ul>";
sum += "<li>" + fruits[0] + "</li>";
sum += "<li>" + fruits[1] + "</li>";
sum += "<li>" + fruits[2] + "</li>";
sum += "</ul>";

document.write(sum);

/*
for(i=0;i<=2;i++){

    if(i==0){
        sum= "<table>" ;
    }

    sum += "<tr><td>"+ fruits[i] +"</td></tr>";
    
    if(i==2){
        sum += "</table>";
    }
}
*/

document.write(sum);



let fruitss = [{fname:"Apple", price: 1000},
              {fname:"Banana", price: 1500},
              {fname:"Cherry", price: 2000},
              {fname:"mango", price: 2000},
              {fname:"watermelon", price: 2000},
              {fname:"blueberry", price: 2000},
              {fname:"cranberry", price: 2000}]




for(i=0;i<=6;i++){

        if(i==0){
            sum= "<table border=1><thead><tr><th>과일</th><th>가격</th></tr></thead> <tbody>" ;
        }
        
       // if(fruitss[i].price >= 1500){
            sum += "<tr><td>"+ fruitss[i].fname +"</td>";
            sum += "<td>"+ fruitss[i].price +"</td></tr>";
       // }
                
        if(i==6){
            sum += "<tbody></table>";
        }
}

document.write(sum);



//확장 for

for(let fruit of fruitss){ 

    console.log('과일: ' + fruit.fname + ', 가격 : ' + fruit.price);
}

// fruit 변수에 fruitss 객체에 있는 내용들 할당해 출력