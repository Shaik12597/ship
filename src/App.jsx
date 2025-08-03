import React, { useState } from 'react';
import './App.css';
import giftGif from './assets/gift.gif';

function App() {
  const [step, setStep] = useState(0);

  const next = () => {
    setStep((prev) => prev + 1);
  };

  const back = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="App">
      {step === 0 && (
        <div className="screen box-screen">
          <img
             src={giftGif}
            alt="Gift Box"
            className="gift-box"
            onClick={next}
          />
          
        </div>
      )}

      {step === 1 && (
        <div className="screen wish-screen wish-card">
          <h3> Happy Friendship Day guysss!! ❤️👯‍♀️🎉 <br /></h3>
         <p>
 
  Luv u so much 😘 Maybe you think you're just friends and roommates to me, <br />
  but you're really a family to me 👨‍👩‍👧‍👧 who takes care of me like my own family. <br /><br />

  If I'm with you, I can confidently say that I can come over any problem 💪😌. <br />
  You make me feel like home, that's the reason I don't feel more homesick 🏠💖 <br />
  —maybe rarely this time 😅— <br />
  but you're the ones who know me completely and accepted my flaws 🥺💗 <br />
  and have been there for me 🫶. <br /><br />

  These days I missed everyone so much 😔 how we insult each other 😜, <br />
  comment on each other 😂 — it's the best part of our friendship 💯. <br />
  Maybe it's named as insult 😆 but it's really a magic in our friendships ✨💫. <br /><br />

  I'm really thankful for your friendship, guys 😇🙏. <br />
  No words to express my friendship towards you 😭❤️. <br /><br />

  Luv u so much 💕👯‍♂️👯‍♀️💐💖
</p>


          <div className="btn-group">
            <button className="btn" onClick={back}>⬅ Back</button>  &nbsp;&nbsp;&nbsp;
            <button className="btn" onClick={next}>Next ➡</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="screen video-screen">
          <h2>Special Memories 🎥</h2>
          <video controls className="video" autoPlay>
            <source src={frd} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="btn-group">
            <button className="btn" onClick={back}>⬅ Back</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
