import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      str += '0123456789';
    }

    if (charAllowed) {
      str += '!@#$%^&*()_+{}[]|;:,.?';
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const passCopy = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="card">
        <div className='row'>
          <div className="input-group mb-3">
            <input ref={passwordRef} type="text" value={password} className="form-control" readOnly />
            <button className="btn btn-primary" type="button" id="button-addon2" onClick={passCopy}>Copy</button>
          </div>

          <div className='col-3'>
            <input type="range" className="form-range" value={length} min="0" max="20" id="customRange2"
              onChange={(e) => { setLength(e.target.value) }}></input>
          </div>
          <div className='col-3'>
            <p>Length({length})</p>
          </div>
          <div className='col-3'>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" checked={numberAllowed} id="flexCheckDefault1"
                onChange={(e) => { setNumberAllowed(e.target.checked) }} />
              <label className="form-check-label">
                Number
              </label>
            </div>
          </div>
          <div className='col-3'>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" checked={charAllowed} id="flexCheckDefault2"
                onChange={(e) => { setCharAllowed(e.target.checked) }} />
              <label className="form-check-label">
                Character
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
