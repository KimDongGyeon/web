//lastExample.js

let person1 = {
    name : "홍길동",
    point : (Math.random()*10).toFixed(1)
}

let person2 = {
    name : "김길동",
    point : (Math.random()*10).toFixed(1)
}

let person3 = {
    name : "박길동",
    point : (Math.random()*10).toFixed(1)
}


let temp
let arr = [person1.point,person2.point,person3.point];
//두 사람 중 포인트 높은 사람의 이름 출력

for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){

        if(arr[j]>arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }

    }
}

for(i=0; i<3; i++){
    document.write(arr[i]+" ");
}