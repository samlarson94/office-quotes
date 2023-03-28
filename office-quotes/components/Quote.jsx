import React, { useState, useEffect } from 'react';



function Quote() {
//   const defaultEndpoint = ;
  let [quote, setQuote] = useState(null);

  // fetch quote data and set it to the state variable
  useEffect(() => {
    console.log("TRYING TO CONNECT")
    fetch("https://officeapi.dev/api/quotes/random")
    .then(response => response.json())
    .then(data => setQuote(data));
  }, []);

  function fetchQuote() {
    fetch("https://officeapi.dev/api/quotes/random")
      .then(response => response.json())
      .then(data => setQuote(data));
  }
//   console.log("trying to fetch quote" + quote)
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