import React from 'react'
import PropTypes from 'prop-types'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/keymap/sublime'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/python/python'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/theme/panda-syntax.css'
import 'codemirror/theme/material.css'
import './codemirror.css'
import './dracula.css'

const CodeField = ({ initialCode, updateCode, language, theme }) => {
  const options = {
    theme,
    autoCloseBrackets: true,
    cursorScrollMargin: 48,
    mode: language,
    lineNumbers: true,
    indentUnit: 2,
    tabSize: 2,
    styleActiveLine: true,
    viewportMargin: 99,
    keyMap: 'sublime',
  }

  return (
    <CodeMirror
      value={initialCode}
      options={options}
      onBeforeChange={(editor, data, value) => {
        updateCode(value)
      }}
      onChange={(editor, data, value) => {
        //   setCode(value)
      }}
    />
  )
}

CodeField.propTypes = {
  initialCode: PropTypes.string.isRequired,
  updateCode: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
}

export default CodeField
