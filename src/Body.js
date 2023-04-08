import React from 'react';
import {useState} from 'react';
import './google.css';
import {AiOutlineSearch} from 'react-icons/ai';
import {BiMicrophone, BiCamera} from 'react-icons/bi'


function Body() {
  const [query, setQuery] = useState('');

  const handleSearch=(event)=> {
    event.preventDefault();
    window.location.href = `https://www.google.com/search?q=${query}`;
  }; 

    const recognition=new window.webkitSpeechRecognition();
    recognition.continuous= false;
    recognition.lang = 'en-US';
  
  const handleClick=() => {
    recognition.start();
  }
  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    setQuery(speechToText)
  }

  return (
    <div className='body'>
      <div className='body_img'>
        <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='Google'/>
      </div>
      <form onSubmit={handleSearch}>
      <div className='search'>
        <AiOutlineSearch color='grey'/>
      <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
        <BiMicrophone className='search-icon' onClick={handleClick}/>
        <BiCamera className='search-icon'/>
      </div>
      <div className="body__button">
        <button variant="outlined">Google Search</button>
        <button variant="outlined">I'm Feeling Lucky</button>

      </div>
      <div className="body__text">
        <p>Google offered in: </p>
        <li className="body__link"><a href="https://www.google.com">Hausa</a></li>
        <li className="body__link"><a href="https://www.google.com">Igbo</a></li>
        <li className="body__link"><a href="https://www.google.com">Èdè</a></li>
        <li className="body__link"><a href="https://www.google.com">Yorùbá</a></li>
        <li className="body__link"><a href="https://www.google.com">Nigerian</a></li>
        <li className="body__link"><a href="https://www.google.com">Pidgin</a></li>
      </div>
      </form>


    </div>
  );
}

export default Body