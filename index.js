const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkLucky = document.querySelector("#check-lucky");
const output = document.querySelector("#output");

checkLucky.addEventListener('click',function checkLuckyButtonHandler(){
    const dobReplaced = dob.value.replaceAll("-","");
    var sum = 0;
    for(let i=0; i<dobReplaced.length; i++){
        sum += Number(dobReplaced[i]);
    }    

    const userLuckyNumber = Number(luckyNumber.value);
    
    luckyTest(sum,userLuckyNumber);
});

function luckyTest(totalDob,luckyNumber){
    if(totalDob % luckyNumber === 0){
        output.innerText = "WOW! Your Birthday Is Lucky😊";
    } else {
        output.innerText = "OOPs! Your Birthday Is Not Lucky🥹";
    }
}