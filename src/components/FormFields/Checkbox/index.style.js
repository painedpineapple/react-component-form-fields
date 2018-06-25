import styled from 'react-emotion'

export default styled('button')(({ options: o }) => ({
  width: o.size,
  height: o.size,
  border: '2px solid #000',
  cursor: 'pointer',
  transition: 'all 0.5s ease',

  input: {
    opacity: 0,
    cursor: 'pointer',
  },

  '&:focus': { outline: 'none' },

  ...activeStyles(o),
  ...o.styles,
}))

function activeStyles(o) {
  return o.active
    ? {
        backgroundColor: '#000',

        ...o.activeStyles,
      }
    : {}
}
