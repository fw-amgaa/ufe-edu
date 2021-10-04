import React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'

const options = {
  mode: 'xml',
  theme: 'material',
  lineNumbers: true,
}

const CodeField = () => {
  return (
    <CodeMirror
      value={this.state.value}
      options={options}
      onBeforeChange={(editor, data, value) => {
        this.setState({ value })
      }}
      onChange={(editor, data, value) => {}}
    />
  )
}

export default CodeField
