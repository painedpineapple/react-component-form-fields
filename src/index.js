import React from 'react'
import { render } from 'react-dom'
import faker from 'faker'
import _ from 'lodash'
import countriesData from 'country-data'
//
import { Input } from './components/FormFields/Input'
import { Checkbox } from './components/FormFields/Checkbox'
import { Select } from './components/FormFields/Select'
import { Container, inputClassName } from './style'

class App extends React.Component<{}> {
  countries = countriesData.countries.all.map(country => ({
    name: country.name,
    id: country.alpha2 + country.alpha3,
  }))
  state = {
    selectedCountry: this.countries[0],
    checkboxStatus: false,
    subscribeEmail: '',
  }
  handleSubscribeEmailChange = (subscribeEmail: string) => {
    // we will get the value back from the controlled input here
    if (subscribeEmail !== this.state.subscribeEmail) {
      this.setState({ subscribeEmail })
    }
  }
  handleSelectChange = country => {
    this.setState({ selectedCountry: country })
  }
  toggleCheckbox = () =>
    this.setState(prevState => ({ checkboxStatus: !prevState.checkboxStatus }))
  render() {
    return (
      <Container>
        <label htmlFor="my-checkbox">You like cheese?</label>
        <Checkbox
          name="my-checkbox"
          onClick={this.toggleCheckbox}
          {...{
            size: 25,
            active: this.state.checkboxStatus,
          }}
        />
        <Select
          {...{
            items: this.countries,
            activeItem: this.state.selectedCountry,
            onChange: this.handleSelectChange,
            label: 'Country',
          }}
        />
        <label htmlFor="week">
          Week Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          {...{
            className: inputClassName,
            inputAttrs: {
              type: 'week',
              id: 'week',
            },
          }}
          value={value => console.log('Week input value', value)}
        />
        <label htmlFor="url">
          Url Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          {...{
            className: inputClassName,
            inputAttrs: {
              type: 'url',
              id: 'url',
            },
          }}
          value={value => console.log('Url input value', value)}
        />
        <label htmlFor="time">
          Time Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          {...{
            className: inputClassName,

            inputAttrs: {
              type: 'time',
              id: 'time',
            },
          }}
          value={value => console.log('Time input value', value)}
        />
        <label htmlFor="tel">
          Tel Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          {...{
            className: inputClassName,

            inputAttrs: {
              type: 'tel',
              id: 'tel',
            },
          }}
          value={value => console.log('Tel input value', value)}
        />
        <label htmlFor="range">
          Range Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          {...{
            className: inputClassName,

            inputAttrs: {
              type: 'range',
              id: 'range',
            },
          }}
          value={value => console.log('Range input value', value)}
        />
        <label htmlFor="password">
          Password Input.<small>
            This isn't included in the Input component
          </small>
        </label>
        <Input
          {...{
            className: inputClassName,

            inputAttrs: {
              type: 'password',
              id: 'password',
            },
          }}
          value={value => console.log('Password input value', value)}
        />
        <label htmlFor="month">
          Month Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          {...{
            className: inputClassName,

            inputAttrs: {
              type: 'month',
              id: 'month',
            },
          }}
          value={value => console.log('Month input value', value)}
        />
        <label htmlFor="hidden">
          Hidden Input.<small>This isn't included in the Input component</small>
          <br />
          <br />
        </label>
        <Input
          {...{
            className: inputClassName,

            inputAttrs: {
              type: 'hidden',
            },
          }}
          value={value => console.log('Hidden input value', value)}
        />
        <label htmlFor="datetime-local">
          Datetime-local Input.<small>
            This isn't included in the Input component
          </small>
        </label>
        <Input
          {...{
            className: inputClassName,
            inputAttrs: {
              type: 'datetime-local',
              id: 'datetime-local',
            },
          }}
          value={value => console.log('Datetime-Local input value', value)}
        />
        <label htmlFor="datetime">
          Datetime Input.<small>
            This isn't included in the Input component
          </small>
        </label>
        <Input
          {...{
            className: inputClassName,
            inputAttrs: {
              type: 'datetime',
              id: 'datetime',
              placeholder: 'Datetime Input',
            },
          }}
          value={value => console.log('Datetime input value', value)}
        />
        <label htmlFor="date">
          Date Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          {...{
            className: inputClassName,
            inputAttrs: {
              type: 'date',
              id: 'date',
              placeholder: 'Date Input',
            },
          }}
          value={value => console.log('Date input value', value)}
        />
        <label htmlFor="text">
          Text Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          {...{
            className: inputClassName,
            inputAttrs: {
              type: 'text',
              id: 'text',
              placeholder: 'Text Input',
            },
          }}
          value={value => console.log('text input value', value)}
        />
        <label htmlFor="number">
          Number Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          {...{
            className: inputClassName,
            inputAttrs: {
              type: 'number',
              id: 'number',
              placeholder: 'Number Input',
            },
          }}
          value={value => console.log('Number input value', value)}
        />
        <label htmlFor="email">
          Email Input.<small>This isn't included in the Input component</small>
        </label>
        <Input
          {...{
            className: inputClassName,
            inputAttrs: {
              type: 'email',
              id: 'email',
              placeholder: 'Email Input',
            },
          }}
          value={this.handleSubscribeEmailChange}
        />
        {/*
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
          value={value => console.log('Color input value', value)}
        />*/}
      </Container>
    )
  }
}

render(<App />, document.getElementById('root'))
