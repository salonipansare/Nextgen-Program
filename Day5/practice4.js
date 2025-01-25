var unit = 250 ;
var bill ;

if(unit < 100){
    console.log("No Charge !!!");
}
else if(unit > 100 && unit < 200){
    unit = unit - 100 ;
    bill = 5 * unit ;
    console.log("Bill = "+ bill);

}
else if(unit > 200){
    unit = unit - 200 ;
    bill = 10 * unit ;
    console.log("Bill = "+ bill );
}
