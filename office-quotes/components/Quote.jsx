import React, { useState, useEffect } from 'react';



function Quote() {
//   const defaultEndpoint = ;
const [quote, setQuote] = useState(null);

  // fetch quote data and set it to the state variable
  useEffect(() => {
    fetch("https://officeapi.dev/api/quotes/random")
    .then(response => response.json())
    .then(data => setQuote(data))
    .catch(error => console.log(error))
  
  }, []);


  function fetchQuote() {
    fetch("https://officeapi.dev/api/quotes/random")
      .then(response => response.json())
      .then(data => setQuote(data))
      .catch(error => console.log(error))
      
  }

  return (    
    <div>
      {quote && (
        <div>
          <p>{quote.content}</p>
          <p>{quote.character.firstname} {quote.character.lastname}</p>
        </div>
      )}
      <button onClick={fetchQuote}>Refresh</button>
    </div>
  );
}

export default Quote;