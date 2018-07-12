// @flow
import React from 'react'
//
import Container from './index.style'

type tProps = {
  options: {
    active: boolean,
    size: number,
    styles?: {},
    activeStyles?: {},
  },
}

export const Checkbox = ({ options, ...props }: tProps) => {
  return (
    <Container
      {...props}
      options={{
        ...options,
        styles: options.styles || {},
        activeStyles: options.activeStyles || {},
      }}
    >
      <input type="checkbox" checked={options.active} />
    </Container>
  )
}
