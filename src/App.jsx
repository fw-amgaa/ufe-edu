import React, { useState } from 'react'
import SplitPane from 'react-split-pane'
import axios from 'axios'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import CodeField from './components/CodeField/CodeField'
import './App.css'

const initialCode =
  'import sys\n\ndef function(a, b): \n  #Кодоо энэ доор бичнэ үү\n  return a + b\n\n\t#Кодоо энэ дээр бичнэ үү\n\nif __name__ == "__main__":\n  a = int(sys.argv[1])\n  b = int(sys.argv[2])\n  result = int(sys.argv[3])\n  print(function(a, b) == result)\n'

const App = () => {
  const [code, setCode] = useState(initialCode)
  const [language, setLanguage] = useState('python')
  const [theme, setTheme] = useState('dracula')
  const [result, setResult] = useState(undefined)

  const submitCode = () => {
    axios
      .post('http://localhost:8080/check', { code, language })
      .then((res) => setResult(res.data.results))
  }

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <FormControl>
            <Select
              labelId="theme"
              id="theme-select"
              value={theme}
              label="Загвар"
              style={{ color: 'white', background: '#15314b' }}
              onChange={(e) => setTheme(e.target.value)}
            >
              <MenuItem value="dracula">Dracula</MenuItem>
              <MenuItem value="panda-syntax">Panda-syntax</MenuItem>
              <MenuItem value="material">Material</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ margin: '0 20px' }}>
            <Select
              labelId="language"
              id="language-select"
              value={language}
              label="Загвар"
              style={{ color: 'white', background: '#15314b' }}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <MenuItem value="python">Python</MenuItem>
              <MenuItem disabled value="javascript">
                Javascript
              </MenuItem>
              <MenuItem disabled value="javascript">
                Typescript
              </MenuItem>
              <MenuItem value="c">C</MenuItem>
              <MenuItem disabled value="c++">
                C++
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <SplitPane split="vertical">
          <SplitPane split="horizontal">
            <div className="pane">
              <div className="info">
                <h4>2 тоог нэмэх</h4>
                <span>Оруулсан 2 тоог хооронд нь нэмэх функц бичнэ үү</span>
                <b>Жишээ</b>
                <span>a = 2</span>
                <span>b = 3</span>
                <span>Хариу = 5</span>
              </div>
            </div>
            <div className="pane">
              Хариу:
              {result !== undefined ? (
                result !== null && result[0] === 'True' ? (
                  <div style={{ color: 'green' }}>Зөв</div>
                ) : (
                  <div style={{ color: 'red' }}>Буруу</div>
                )
              ) : (
                ''
              )}
            </div>
          </SplitPane>
          <div className="pane">
            <Button variant="contained" onClick={submitCode}>
              Шалгах
            </Button>
            <div style={{ margin: '30px 0' }}>
              <CodeField
                initialCode={code}
                updateCode={setCode}
                language={language}
                theme={theme}
              />
            </div>
          </div>
        </SplitPane>
      </div>
    </div>
  )
}

export default App
