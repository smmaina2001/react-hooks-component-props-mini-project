import React from 'react';

// Default date value
const defaultDate = "January 1, 1970";

const Article = ({ title, date = defaultDate, preview }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;