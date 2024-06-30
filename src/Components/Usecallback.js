import React from 'react';

const Usecallback = React.memo(({ todos, addTodos }) => {
  console.log('Component rendered');

  return (
    <>
      <h1>Hi</h1>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={addTodos}>Add todo</button>
    </>
  );
});

export default Usecallback;
