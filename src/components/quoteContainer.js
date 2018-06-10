import React from 'react';

function QuoteContainer(props) {
  return (
    <div className="quote-container">
      <div className="quote-text">{props.quote.quote}</div>
      <div className="quote-source">{props.quote.source}</div>
    </div>
   
  )
}

export default QuoteContainer