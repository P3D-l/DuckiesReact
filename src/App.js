import React from 'react';
import './App.css';
import ducklings from './images/ducklings.jpg'

const mainImage = {
  width: '70%',
  marginTop: '20px',
  marginBottom: '20px',
  borderRadius: '10px',
};


function App() {
  return (
    <div className="App">
      
      <body className="App-body">
      <p>
        batata
      </p>
      <header className="App-header">
        <div className='mainImage'>
          <p1>
            <br></br>
            Wellcome to the new Duckies/animals website
            <br></br>
            yaaayyyy
            <br></br>
          </p1>
          <img src={ducklings} alt='ducklings' style={mainImage}
          />
        </div>
      </header>
      </body>
    </div>
  );
}

export default App;
