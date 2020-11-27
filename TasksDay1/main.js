////////////////////task 1////////////////////
console.log("**************task1******************");
function checked(checkedNumber) {
    var checkResult = "";
    if (checkedNumber % 3 == 0) checkResult += "FIZZ ";
    if (checkedNumber % 5 == 0) checkResult += "BUZZ ";
    if (checkedNumber % 5 != 0 && checkedNumber % 3 != 0) checkResult += "NONE ";
    console.log(checkResult);
}
checked(8);

////////////////////task 2////////////////////
console.log("**************task2******************");

var arr = ["amira", "mona", "soha"];
function array() {
    const randomElement = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomElement);
}
array();
array();


////////////////////task 3////////////////////
console.log("**************task3******************");

var string = "This is javaScript";
var arr = [];
function findCharPostion() {
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'i') {
            arr.push(i);
        }
    }
    console.log(arr);
}
findCharPostion();

////////////////////task 4////////////////////
console.log("**************task4******************");

function divideMoney(num) {
    dollar = Math.floor(num);
    resetnum = (num - dollar) * 100;
    quater = Math.floor(resetnum / 25);
    quaresetnum = (resetnum - quater * 25);
    dime = Math.floor(quaresetnum / 10);
    dimresetnum = (quaresetnum - dime * 10);
    nickel = Math.floor(dimresetnum / 5);
    cent = (dimresetnum - nickel * 5);
    console.log("You have " + dollar + " dollar, " + quater + " quater, " + dime + " dime, " + nickel + " nickel and " + cent + " cent.");
}
divideMoney(15.92);



////////////////////task 5////////////////////
console.log("**************task 5******************");

function printTriangle(n) {

    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));

    }
}
printTriangle(5);


////////////////////task 6////////////////////
console.log("**************task 6******************");


function whoIam() {
    var fly = confirm("Do you fly?");
    if (fly) {
        var wide = confirm("Are you wide?");
        if (wide) {
            alert("Eagle");
        }
        else {
            alert("Parrot");
        }
    }
    else {
        var sea = confirm("Do you live under sea?");
        if (sea) {
            var wide = confirm("Are you wide?");
            if (wide) {
                alert("shark");
            }
            else {
                alert("Dolphin");
            }
        }
        else {
            var wide = confirm("Are you wide?");
            if (wide) {
                alert("Line");
            }
            else {
                alert("Cat");
            }
        }
    }

}
whoIam();