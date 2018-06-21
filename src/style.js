import styled from 'react-emotion'

export default {
  input: {
    padding: 10,
  },
}

export const Container = styled('div')(() => ({
  maxWidth: '800px',
  fontSize: 18,
  margin: '0 auto',

  label: {
    fontSize: 14,
    paddingBottom: 5,
    display: 'block',

    small: {
      fontSize: 12,
      marginLeft: 15,
    },
  },

  input: {
    display: 'block',
    marginBottom: 25,
  },
}))
