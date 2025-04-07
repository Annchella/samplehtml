//printing to consloe
document.write("hello world:")
console.warn("hyy")
console.error("errrrrrrrror")
console.log("heeee")


//printing the data types
var a=12
console.log(a)

let b=10
console.log(b)

const c=20
console.log(c)

let name="ann"
let sal=20000
let invalid=false

//operators
let num=2
num+=8
console.log(num)

let num1=5
num1-=3
console.log(num1)

let num2=5
num2*=4
console.log(num2)


let x =num2++
console.log(x)

++x
console.log(x)


//
let a1=true
let b1=false

console.log((a1!=b1)||(2==3))
console.log((a1!=b1)&&(2==3))

// conditional statements
var i=5
if(i<3)
{
    console.log("hello")

}
else{
    console.log("i is not greater than 3")
}

//loops
let sum=0
for(i=0;i<=10;i++)
{
    sum+=i
}
console.log(sum)

//objects
let stud={
    name:"ann",
    age:20,
    sal:23000

}
console.log(stud.name)

//functions
function greet(){
    alert("welcome to js:")
}
greet()

function add(a,b){
    return a+b
}
let result=add(12,3)
console.log(result)


//arrow functions
let diff=(num1,num2)=>{
    return num1-num2
}
let output=diff(15,4)
console.log(output)

//arrays
const seasons=["winter","summer","spring"]
console.log(seasons[2])
console.log(seasons[0])

for(i=0;i<seasons.length;i++)
{
    console.log(seasons[i])
}

//foreach loop
seasons.forEach((item)=>console.log(item))

//map function
let number=[10,5,4,2]
let doublenumber=number.map(item=>item*2)
console.log(doublenumber)
