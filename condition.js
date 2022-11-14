// condition.js

let score = parseInt(Math.random() *60) + 40; ;
let pass = "";

console.log(score);

if(score>=60){
    pass = "합격"
}

else{
    pass = "불합격"
}
/*
pass = (score >= 60) ? "합격" : "불합격";
console.log(pass);
*/



if(score>=95){
    pass = "A+";
}
else if(score>=90){
    pass = "A";
}
else if(score>=85){
    pass = "B+";
}
else if(score >=80){
    pass = "B";
}
else if(score>=75){
    pass = "C+";
}
else if(score >=70){
    pass = "C";
}
else {
    pass = "D";
}

console.log(pass);


/*
else{
    if(score>=80){
        pass = "B";
    }
    
    else{
        if(score>=70){
            pass = "c";
        }

        else{
            pass = "d";
        }
    }
}
*/

