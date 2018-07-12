// @flow
import React from 'react'
//
import Container from './index.style'

type tProps = {
  renderProps?: (value: string) => any,
  options: {
    styles?: {},
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
    const { options: { inputAttrs, ...options }, ...attrs } = this.props

    return (
      <Container
        {...attrs}
        options={{
          ...options,
          styles: options ? options.styles || {} : {},
        }}
      >
        <input
          onChange={this.handleChange}
          value={this.state.value}
          {...inputAttrs}
        />
        {this.props.renderProps && this.state.value !== ''
          ? this.props.renderProps(this.state.value)
          : null}
      </Container>
    )
  }
}
