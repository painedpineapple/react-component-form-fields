// @flow
import React from 'react'
//

type tProps = {
  renderProps?: (value: string) => any,
  className?: {},
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
    value: '',
  }
  handleChange = (e: any) => {
    this.setState({
      value: e.target.value,
    })
  }
  render() {
    const { inputAttrs, className, ...attrs } = this.props

    return (
      <div {...attrs} className={className ? className : ''}>
        <input
          onChange={this.handleChange}
          value={this.state.value}
          {...inputAttrs}
        />
        {this.props.renderProps && this.state.value !== ''
          ? this.props.renderProps(this.state.value)
          : null}
      </div>
    )
  }
}
