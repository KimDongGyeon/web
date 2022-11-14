// 2022.11.14 javascript 수업
// variable1.js

// 객체(Object) 선언법 (structure와 유사한 개념)

let person1 = {
    name: "김동견",
    age: 29,
    height: 167.7,
    marriage: false
};


console.log(person1.name); // getter = 값 출력
person1.name = "KimDongGyeon"; // setter = 값 입력

console.log(person1["age"]);
console.log(person1.name);
person1["age"] = 22;

let field = "height"; // field 변수에 "height" string 값 할당
console.log(person1[field]); // 현재 field 값은 height, person1[height] 을 출력한것과 같은 결과
field = "marriage"; // field 변수에 "marriage" string 값 할당
console.log(person1[field]); // person1[marrage] 출력


// 배열(Array)

let scoreArray = [90,80,85,70,88];
console.log(scoreArray[0]); // getter
scoreArray[0] = 95; // setter


console.log(scoreArray[2]);

// Array + Object

let class_js = [100];
console.log(class_js[0]);

// 학생의 이름, 학생번호, 점수
let stu1 = {
    stuName : '김동견',
    stuNo : '1-001',
    score : 90
}

let stu2 = {
    stuName : '문민희',
    stuNo : '1-002',
    score : 85
}

let stu3 = {
    stuName : '박혜진',
    stuNo : '1-003',
    score : 95
}

let stu4 = {
    stuName : '이재현',
    stuNo : '1-004',
    score : 88
}

let ourClass = [stu1,stu2,stu3];

console.log(ourClass[0].stuName);
console.log(ourClass[1].score);
console.log(ourClass[2]["stuNo"]);
ourClass[3] = stu4;

console.log(ourClass.length);
ourClass[4] = {
    stuName : '에베ㅔ베',
    stuNo : '1-005',
    score : 89
}

console.log(ourClass.length);
let average = ( ourClass[0].score + ourClass[1].score + ourClass[2].score + ourClass[3].score + ourClass[4].score ) / 5;
console.log("우리반의 평균은" + average + "입니다.");

/*

// for문으로 걍 해봄 ㅅㅂ 감 다 뒤졌네 == 랑 = 구분을 못하누

for(i=0; i<5; i++){
    if(i==0){
        average=0;
    }

    average += ourClass[i].score;
    
    
    else if(i==4){
        average = average / 5
    }
    
}

console.log(average);

*/








