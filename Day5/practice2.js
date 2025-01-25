var w = 36;
var h = 1.57 ;

var bmi = w /( h*h);

console.log("BMI = " + bmi);

if(bmi< 18.5)
    {
    console.log("Underweight");
}
else if(18.5 <= bmi && bmi <= 24.9)
{
    console.log("normal weight");
}
else if(25 <= bmi && bmi <= 29.9)
{
    console.log("Overweight");
}
else{
    console.log("Obese");
}
