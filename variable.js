    // 2022.11.14 javascript 수업


        //변수 선언.
        console.log("Hello World")//콘솔 탭에 출력
        let name; //변수 선언. => string 타입 변수선언
        name = "김동견"// 변수에 값 할당 
        console.log(name); // name 변수 출력
        let age = 20; // num 타입 변수선언
        console.log("이름은"+name+"이고, 예전 나이는"+age+"입니다.");

        let marriage = true; // boolean 타입 변수선언
        console.log("결혼여부는"+ marriage);
        marriage = false;

        console.log(typeof name);  // type of => 변수의 자료형 출력
        name = true;
        console.log(typeof name) 
        // name 변수의 자료형이 string 타입에서 boolean 형태로 변경되어 출력되는것을 확인 할 수있다.

        // 상수 선언. 상수는 한번 할당시 변경 불가능
        const gender = "Men";
        // gender = "Women"; // 따라서 해당라인에서 에러메시지 출력

        let name1 = "김동견"
        let height = 165
        let weight = 62

        console.log("이름은"+name1+"이고, 키는"+height+"이고, 몸무게는"+weight+"입니다.")

        // 조건문.

        let averageHeight = 160;
        if(height>averageHeight) {
            console.log("키가" + averageHeight + "보다 큽니다.")
        }
/*
        if(height>170){
            console.log("키가 170보다 큽니다.") 
        }

        else if(height>160){
            console.log("키가 160보다 큽니다.")
        }


*/

// 연산식. (+, -, *, /)
        let weight1 = 66.3;
        let weight2 = 60.4;
        let weight3 = 64.2;
        let averageWeight;
        
        averageWeight = (weight1 + weight2 + weight3) / 3 

        console.log(name1 + "의 몸무게는 평균" + averageWeight.toFixed(2) + "보다 적습니다.")
        // toFixed(n) == 값을 소수점 2자리 까지만 출력


/*
        for(step=150; step<180; step++){
            if(height==step){
                console.log("키가"+step+"입니다.");
            }
        }
*/