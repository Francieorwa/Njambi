import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="image-container">
          <div className="row">
            <div className="col-md-6">
              <img className="card-img-top fade-in" src="images/happy.jpg" alt="Balloon" style={{aspectRatio:"4/2",objectFit:"cover"}} />
            </div>
            <div className="col-md-6">
              <img className="card-img-top fade-in" src="images/birthday.jpg" alt="Balloon" style={{aspectRatio:"4/2",objectFit:"cover"}} />
            </div>
          </div>
        </div>
        <h1 className="rainbow-text" style={{fontSize:"80px"}}>Happy Birthday Njambi</h1>
        <p className="card-text lead" style={{fontSize: "30px", fontFamily: "cursive", color: "black", animation: "fadeIn 2s ease-in-out"}}>
  As I sit down to write this message, my heart is filled with so much gratitude and love for you.<br></br>
  You mean the world to me, and I am so grateful to have you in my life.<br></br>
  From the moment we met, I knew that you were someone special. <br></br>
  You have brought so much joy, laughter, and light into my life, and I cannot imagine what my life would be like without you.<br></br>
  You have been there for me through thick and thin, and I know that I can always count on you to have my back.<br></br>
  You are the one person who truly understands me and who loves me unconditionally.<br></br>
  I want you to know that I am committed to building a life filled with love, laughter, and adventure, and I cannot imagine doing it without you by my side.<br></br>
  Together, we will face whatever challenges come our way, and we will celebrate all of life's little victories.<br></br>
  Thank you for being my rock, my confidante, and my best friend.<br></br>
  I love you more than words could ever express, and I am so grateful for our friendship.<br></br>                                  
  Here's to many more years of laughter, love, and endless memories.
</p>

 
      </header>
    </div>
  );
}

export default App;
