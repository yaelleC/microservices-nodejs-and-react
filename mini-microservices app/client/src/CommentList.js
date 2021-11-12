import React from 'react';

export default ({ comments }) => {
    const renderedComments = comments.map(comment => {
      return <li id={comment.id}>{ comment.content }</li>;
    });

    return (
      <ul>
        { renderedComments }
      </ul>
    );
};