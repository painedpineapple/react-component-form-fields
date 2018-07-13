// @flow
import React from 'react'
//

type tProps = {
  value?: (value: string) => any,
  className?: string,
  inputAttrs: {
    type:
      | 'color'
      | 'date'
      | 'datetime'
      | 'datetime-local'
      | 'email'
      | 'hidden'
      | 'month'
      | 'number'
      | 'password'
      | 'range'
      | 'search'
      | 'tel'
      | 'text'
      | 'time'
      | 'url'
      | 'week',
  },
}

type tState = {
  value: string,
}

export class Input extends React.Component<tProps, tState> {
  state = {
    prevValue: '',
    value: '',
  }
  handleChange = (event: any) => {
    event.persist()
    this.setState({ value: event.target.value })
  }
  render() {
    const { inputAttrs, className, value, ...attrs } = this.props

    return (
      <div {...attrs} className={className ? className : ''}>
        <input
          onChange={this.handleChange}
          value={this.state.value}
          {...inputAttrs}
        />
        {value && this.state.value !== '' && value(this.state.value)}
      </div>
    )
  }
}
