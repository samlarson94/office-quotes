import React, { useState, useEffect } from 'react';

const defaultEndpoint = 'https://officeapi.dev/api/quotes/random';

function Quote() {
  const [quote, setQuote] = useState(null);

  // fetch quote data and set it to the state variable
  useEffect(() => {
    fetch(defaultEndpoint)
      .then(response => response.json())
      .then(data => setQuote(data));
  }, []);

  function fetchQuote() {
    fetch(defaultEndpoint)
      .then(response => response.json())
      .then(data => setQuote(data));
  }
  console.log("trying to fetch quote" + quote)
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