let givenNumber = 2;
if(givenNumber <= 0)
    console.log('Error Message: Given number is zero or negative value given number should be any positive value');
else{
    printFirst10Multiples();
}
function printFirst10Multiples(){
    for(let i=1; i<=10; i++){
         console.log(givenNumber+' * '+i+' = '+(givenNumber*i));
    }
}