function insert(num)
{
    document.form1.calculatorScreen.value = document.form1.calculatorScreen.value + num;
}
function equal()
{
    var exp = document.form1.calculatorScreen.value;
    if(exp)
    {
        document,form1.calculatorScreen.value = eval(exp)
    }
}