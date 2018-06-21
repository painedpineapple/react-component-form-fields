import styled from 'react-emotion'

export default styled('span')(({ options: o }) => ({
  ...o.styles,
}))
