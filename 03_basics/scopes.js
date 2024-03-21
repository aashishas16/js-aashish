
/*var c=300 //global scope


if(true)//block scope
{
    let a= 10
    const b=20
    var c=30// var we avoid to use it will take value in out of scope also c will prinnt 30
}
//console.log(a);
//console.log(b);
console.log(c); */


function first(){
    const username  ="aashish"
    function second(){
        const web ="insta"
        console.log(username);
    }
   /// console.log(web);
    second()
}
//first()



if(user==="aashish")
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}