import React from 'react';
import './App.css';


function App() {
  return (
    <div className="flex-container">
      <div className="main-header">
        <button>sign-in</button>
        <button>sign-up</button>
      </div>
      <form className="flex-form">
        <input className="form-input" name="username" placeholder="username" type="text"/>
        <input className="form-input" name="email" placeholder="email" type="email" required={true}/>
        <input className="form-input" name="password" placeholder="password" type="password" required={true}/>
        <button className="form-input" onSubmit={() => console.log('submitted')}>submit</button>
      </form>
    </div>
  );
}

export default App;
