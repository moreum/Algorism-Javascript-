const fs = require("fs")
const filepath = process.platform === "linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

input= input[0]
input = input.split(" ").map((item) => +item)

solution(input[0]);

function solution(a){

    if(100>=a && a>=90) {
        console.log("A");
    }else if(89>=a && a>=80) {
        console.log("B");
    }else if(79>=a && a>=70) {
        console.log("C");
    }else if(69>=a && a>=60) {
        console.log("D");
    }else{
        console.log("F");
    }
}