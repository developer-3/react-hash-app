import './App.css';
import 'bulma/css/bulma.min.css';
import HashOutput from './components/HashOutput';
import { useState } from 'react';
var Hashes = require('jshashes')

function App() {

  const [input, setInput] = useState('')
  const [md5, setMd5] = useState('')
  const [sha1, setSha1] = useState('')
  const [sha256, setSha256] = useState('')
  const [sha512, setSha512] = useState('')

  function onChange(event) {
    setInput(event.target.value)
    console.log(event.target.value)
    if (event.target.value === '') {
      setMd5('')
      setSha1('')
      setSha256('')
      setSha512('')
    } else {
      var MD5 = new Hashes.MD5().hex(input);
      var SHA1 = new Hashes.SHA1().hex(input);
      var SHA256 = new Hashes.SHA256().hex(input);
      var SHA512 = new Hashes.SHA512().hex(input);
      setMd5(MD5)
      setSha1(SHA1)
      setSha256(SHA256)
      setSha512(SHA512)
    }
  }

  return (
    <div className="App" style={{textAlign: "Left", marginLeft: 20, marginRight: 20}}>
      <br></br>
      <h1 class="title is-3">Input</h1>
      <input class="input" type="text" placeholder="Start typing..." onChange={event => onChange(event)}></input>
      <div style={{height:20}}/>
      <h1 class="title is-4">MD5</h1>
      <HashOutput hash={md5}/>
      <h1 class="title is-4">SHA-1</h1>
      <HashOutput hash={sha1}/>
      <h1 class="title is-4">SHA-256</h1>
      <HashOutput hash={sha256}/>
      <h1 class="title is-4">SHA-512</h1>
      <HashOutput hash={sha512}/>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Hash App</strong> by <a href="https://github.com/developer-3">Adam Anderson</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
