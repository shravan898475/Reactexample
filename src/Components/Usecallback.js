import React from 'react';
import Useeffect from './Useeffect';

const Usecallback = React.memo(({ todos, addTodos }) => {
  return (
    <>
      <h1>Use Effect Example </h1>
      <Useeffect/>
      <hr/>
      <h1>Hi</h1>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={addTodos}>Add todo</button>
    </>
  );
});
export default Usecallback;
