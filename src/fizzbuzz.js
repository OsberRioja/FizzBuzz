function esMultiplo(num)
{
    const cad=[];
    for(var i=1;i<=num;i=i+1)
    {
        if(i%3==0 && i%5==0)
        {
            cad.push('FizzBuzz');
        }
        else
        {
            if(i%3==0)
            {
                cad.push('Fizz');
            }
            else{
                if(i%5==0)
                {
                    cad.push('Buzz');
                }
                else{
                    cad.push(i);
                }
            }
        }
    }
    return cad;
}


export default esMultiplo;
