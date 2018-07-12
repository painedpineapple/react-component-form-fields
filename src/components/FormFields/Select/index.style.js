import styled from 'react-emotion'

const color = {
  white: ['255,255,255', '240,240,240'],
  black: ['44,42,41'],
  gray: ['197,198,198'],
  blue: ['0,114,206'],
}

export default styled('div')(props => ({
  '.input-wrapper': {
    position: 'relative',
  },

  '.field-group': {
    position: 'relative',
    display: 'flex',

    label: {
      marginTop: 15,
      marginRight: 20,
    },
  },

  input: {
    fontSize: 14,
    width: 345,
    wordWrap: 'break-word',
    lineHeight: '38px',
    outline: 0,
    whiteSpace: 'normal',
    background: '#ffffff',
    display: 'inline-block',
    padding: '0 15px',
    boxShadow: 'none',
    border: `1px solid rgba(${color.gray[0]})`,
    transition: 'all 0.5s ease',
    margin: 0,

    '&:hover, &:focus': {
      boxShadow: '2px 2px 16px rgba(0, 0, 0, 0.15)',
    },
  },

  '.menu': {
    maxHeight: '20rem',
    overflowY: 'auto',
    overflowX: 'hidden',
    borderTopWidth: '0',
    outline: '0',
    transition: 'all 0.1s ease',
    boxShadow: '2px 2px 16px rgba(0, 0, 0, 0.15)',
    borderColor: `rgb(${color.gray[0]})`,
    backgroundColor: `rgb(${color.white[0]})`,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: 'solid',
    position: 'absolute',
    width: '100%',
    zIndex: 100,
  },

  '.control-button': {
    backgroundColor: 'transparent',
    border: 'none',
    position: 'absolute',
    right: 10,
    top: 15,
    cursor: 'pointer',

    'svg path': {
      fill: '#3C3C3C',
      transition: 'fill 0.5s ease',
    },

    '&:focus': {
      outline: 'none',
    },

    ...ControlButtonIsOpen(props.isOpen),
  },

  ...props.styles,
}))

export const Item = styled('div')(props => ({
  position: 'relative',
  cursor: 'pointer',
  display: 'block',
  border: 'none',
  height: 'auto',
  textAlign: 'left',
  borderTop: 'none',
  lineHeight: '1em',
  fontSize: 14,
  textTransform: 'none',
  fontWeight: '400',
  boxShadow: 'none',
  padding: '.8rem 1.1rem',
  whiteSpace: 'normal',
  wordWrap: 'normal',
  transition: 'all 0.5s ease',

  ...itemIsSelected(props),

  ...props.styles,
}))

function itemIsSelected(props) {
  let styles = {}
  if (props.isActive) {
    styles = {
      color: `rgb(${color.black[0]})`,
      background: `rgb(${color.white[1]})`,

      ...props.activeStyles,
    }
  }
  if (props.isSelected) {
    styles = {
      ...styles,
      color: `rgb(${color.white[0]})`,
      background: `rgb(${color.blue[0]})`,
      fontWeight: '700',

      ...props.selectedStyles,
    }
  }
  return styles
}

function ControlButtonIsOpen(isOpen) {
  return isOpen
    ? {
        'svg path': {
          fill: `rgb(${color.blue[0]})`,
        },
      }
    : {}
}
