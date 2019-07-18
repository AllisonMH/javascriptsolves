function withoutMultiplication(x,y)
{
  var finalAnswer;
  x = Math.abs(x);
  y = Math.abs(y)

  if (x== 0 || y == 0)
  {

    finalAnswer = 0;

  } else if(x == 1){

    finalAnswer = y;

  } else if( y == 1){

    finalAnswer = x;

  }  else {
    finalAnswer = x + withoutMultiplication(x, y-1)

}
  return finalAnswer;

}

function isNeg(x, y)
{
  var a = withoutMultiplication(x,y)
  return (y < 0) ? -a : a
}

 console.log(isNeg(5, -11))
