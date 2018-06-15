import React from 'react'
import { render } from 'react-dom'
import faker from 'faker'
import _ from 'lodash'
//
import Input from './FormFields/Input'
import customStyles, { P } from './style'

class App extends React.Component<{}, { isActive: boolean }> {
  render() {
    return (
      <div style={{ marginTop: 80, marginLeft: 20 }}>
        <label htmlFor="Text Input">Text Input Label </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'text',
              name: 'Text Input',
              id: 'text-input',
              placeholder: 'Text Input',
            },
          }}
          renderProps={value => console.log('text input value', value)}
        />
        <div>
          {_.times(20, () => (
            <P key={faker.random.uuid()}>{faker.lorem.paragraph()}</P>
          ))}
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
