// @flow
import React from 'react'
//
import Container from './index.style'

type tProps = {
  active: boolean,
  size: number,
  styles?: {},
  activeStyles?: {},
}

export const Checkbox = ({
  active,
  size,
  styles,
  activeStyles,
  ...props
}: tProps) => {
  return (
    <Container
      {...props}
      {...{
        active,
        size,
        styles: styles || {},
        activeStyles: activeStyles || {},
      }}
    >
      <input type="checkbox" checked={active} />
    </Container>
  )
}
