import React from 'react'
import { render } from 'react-dom'
import faker from 'faker'
import _ from 'lodash'
//
import Input from './FormFields/Input'
import customStyles, { Container } from './style'

class App extends React.Component<{}, { isActive: boolean }> {
  render() {
    return (
      <Container>
        <label htmlFor="week">
          Week Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'week',
              id: 'week',
            },
          }}
          renderProps={value => console.log('Week input value', value)}
        />
        <label htmlFor="url">
          Url Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'url',
              id: 'url',
            },
          }}
          renderProps={value => console.log('Url input value', value)}
        />
        <label htmlFor="time">
          Time Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'time',
              id: 'time',
            },
          }}
          renderProps={value => console.log('Time input value', value)}
        />
        <label htmlFor="tel">
          Tel Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'tel',
              id: 'tel',
            },
          }}
          renderProps={value => console.log('Tel input value', value)}
        />
        <label htmlFor="range">
          Range Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'range',
              id: 'range',
            },
          }}
          renderProps={value => console.log('Range input value', value)}
        />
        <label htmlFor="password">
          Password Input.<small>
            This isn't included in the Input component
          </small>
        </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'password',
              id: 'password',
            },
          }}
          renderProps={value => console.log('Password input value', value)}
        />
        <label htmlFor="month">
          Month Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'month',
              id: 'month',
            },
          }}
          renderProps={value => console.log('Month input value', value)}
        />
        <label htmlFor="hidden">
          Hidden Input.<small>This isn't included in the Input component</small>
          <br />
          <br />
        </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'hidden',
            },
          }}
          renderProps={value => console.log('Hidden input value', value)}
        />
        <label htmlFor="datetime-local">
          Datetime-local Input.<small>
            This isn't included in the Input component
          </small>
        </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'datetime-local',
              id: 'datetime-local',
            },
          }}
          renderProps={value =>
            console.log('Datetime-Local input value', value)
          }
        />
        <label htmlFor="datetime">
          Datetime Input.<small>
            This isn't included in the Input component
          </small>
        </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'datetime',
              id: 'datetime',
              placeholder: 'Datetime Input',
            },
          }}
          renderProps={value => console.log('Datetime input value', value)}
        />
        <label htmlFor="date">
          Date Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'date',
              id: 'date',
              placeholder: 'Date Input',
            },
          }}
          renderProps={value => console.log('Date input value', value)}
        />
        <label htmlFor="text">
          Text Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'text',
              id: 'text',
              placeholder: 'Text Input',
            },
          }}
          renderProps={value => console.log('text input value', value)}
        />
        <label htmlFor="number">
          Number Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'number',
              id: 'number',
              placeholder: 'Number Input',
            },
          }}
          renderProps={value => console.log('Number input value', value)}
        />
        <label htmlFor="email">
          Email Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'email',
              id: 'email',
              placeholder: 'Email Input',
            },
          }}
          renderProps={value => console.log('Email input value', value)}
        />

        <label htmlFor="color">
          Color Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          options={{
            styles: customStyles,
            inputAttrs: {
              type: 'color',
              id: 'color',
              placeholder: 'Color Input',
            },
          }}
          renderProps={value => console.log('Color input value', value)}
        />
      </Container>
    )
  }
}

render(<App />, document.getElementById('root'))
