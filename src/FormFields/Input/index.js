import React from 'react'
//
import Container from './index.style'

type tProps = {
  renderProps?: ({}) => any,
  options: {
    styles?: {},
    inputAttrs: any,
  },
}

type tState = {
  value: string,
}

export default class Input extends React.Component<tProps, tState> {
  unsupportedTypes = [
    'button',
    'checkbox',
    'file',
    'image',
    'radio',
    'reset',
    'submit',
  ]
  state = {
    value: '',
  }
  handleChange = e => {
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
