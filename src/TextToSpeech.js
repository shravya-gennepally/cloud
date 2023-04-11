// import React, { useState , useEffect} from 'react';
// import axios from 'axios';


// function TextToSpeech() {
//   const [text, setText] = useState('');
//   const [email, setEmail] = useState('');

//   const [link, setLink] = useState('');
//   const [loading, setLoading] = useState(false);

//   const input ={"inputText":text};
//   const emailinput ={"email": email};
//   const json = JSON.stringify(input)

//   const handleInputChange = (event) => {
//     setText(event.target.value);
    
//   };
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   }; 

//   const handleButtonClick = async () => {
    
//     setLoading(true);

//     const apiUrl = 'https://j6zzpvv3v0.execute-api.us-east-1.amazonaws.com/dev/texttospeech';

// const data = { inputText: text, email: email };
// console.log(data)

// axios.post(apiUrl, data)
//   .then(response => {
//     console.log(response.data);
//     const url = response.data
//     setLink(url)
    
//   })
//   .catch(error => {
//     console.log(error);
//   });
//   };    
//   useEffect(() => {
//     let timer;
//     if (link) {
//       setLoading(false);
//       timer = setTimeout(() => {
//         window.location.href = link;

//       }, 15000);
//     }
//     return () => clearTimeout(timer);
//   }, [link]);

//   return (
//     <div>
//       <label>
//         Enter Text:
//         <input type="text" value={text} onChange={handleInputChange} />
//       </label>
//       <br />
//       <label>
//         Enter Email:
//         <input type="email" value={email} onChange={handleEmailChange} />
//       </label>
//       <br />
//       <button onClick={handleButtonClick}>Convert to Speech</button>
//       {loading && <p>Loading...</p>}
//       {link && <p>{link}</p>}
//     </div>
//   );
// }

// export default TextToSpeech;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    padding: '40px',
    fontFamily: 'Arial',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    marginBottom: '16px',
    fontSize: '16px',
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '16px',
    width: '100%',
  },
  link: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  loading: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

function TextToSpeech() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);

  const input ={"inputText":text};
  const emailinput ={"email": email};
  const json = JSON.stringify(input)

  const handleInputChange = (event) => {
    setText(event.target.value);
    
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }; 

  const handleButtonClick = async () => {
    
    setLoading(true);

    const apiUrl = 'https://8a254j5jxg.execute-api.us-east-1.amazonaws.com/prod/myresource';

    const data = { inputText: text, email: email };

    axios.post(apiUrl, data)
      .then(response => {
        console.log(response.data);
        const url = response.data
        setLink(url)
      })
      .catch(error => {
        console.log(error);
      });
  };    

  useEffect(() => {
    let timer;
    if (link) {
      setLoading(false);
      timer = setTimeout(() => {
        window.location.href = link;
      }, 15000);
    }
    return () => clearTimeout(timer);
  }, [link]);

  return (
    
    <div style={styles.container}>
      <h1>Text to Speech Converter</h1>
      <label style={styles.label}>Enter Text that you want to convert into speech:</label>
      <input style={styles.input} type="text" value={text} onChange={handleInputChange} />
      <label style={styles.label}>Enter Email to recieve the speech:</label>
      <input style={styles.input} type="email" value={email} onChange={handleEmailChange} />
      <button style={styles.button} onClick={handleButtonClick}>Convert to Speech</button>
      {loading && <p style={styles.loading}>Loading...</p>}
      {link && <p style={styles.link}><a href={link} target="_blank" rel="noopener noreferrer">The audio file has been sent to your email or you can listen to it in 10 more seconds </a></p>}
    </div>
  );
}

export default TextToSpeech;

