import react from  'react'

const BigComponent = () =>{


function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const result = fibonacci(60); // This will be computationally intensive
  return <div>{`Fibonacci(40) = ${result}`}</div>;

}


export default BigComponent