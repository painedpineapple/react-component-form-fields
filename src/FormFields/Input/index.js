import React from 'react'
//
import Container from './index.style'

type tProps = {
  type: string,
  name: string,
  renderProps?: ({}) => any,
  options: {
    styles?: {},
    inputAttrs?: {},
  },
}

type tState = {
  value: string,
}

export default class Input extends React.Component<tProps, tState> {
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
