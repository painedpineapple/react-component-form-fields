import styled from 'react-emotion'

export default styled('button')(props => ({
  width: props.size,
  height: props.size,
  border: '2px solid #000',
  cursor: 'pointer',
  transition: 'all 0.5s ease',

  input: {
    opacity: 0,
    cursor: 'pointer',
  },

  '&:focus': { outline: 'none' },

  ...props.styles,
  ...setActiveStyles(props),
}))

function setActiveStyles(props) {
  return props.active
    ? {
        backgroundColor: '#000',

        ...props.activeStyles,
      }
    : {}
}
