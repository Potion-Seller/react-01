
var palindrom = "kajak";

function reverseString(palindrom: string):string {
    return palindrom.split("").reverse().join("");
}

const reverse: string = reverseString(palindrom);

if(palindrom === reverse){

    console.log("jest to palindrom");
}
else
{
    console.log("nie jest to palindrom");
}