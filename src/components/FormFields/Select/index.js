// @flow
import React from 'react'
import Downshift from 'downshift'
import { Transition, config as springConfig, animated } from 'react-spring'
//
import Container, { Item } from './index.style'
import { ArrowDownIcon } from '../../Icons/ArrowDownIcon'

type tItem = {
  name: string,
  id: string | number,
}

type tProps = {
  options: {
    items: Array<tItem>,
    activeItem?: tItem,
    label?: string,
    onChange: any => void,
    styles?: {},
    itemStyles?: {},
    itemActiveStyles?: {},
    itemSelectedStyles?: {},
  },
}

export const Select = ({
  options: { items, activeItem, label, onChange, ...options },
  ...props
}: tProps) => {
  return (
    <Downshift
      itemToString={i => (i ? i.name : '')}
      selectedItem={activeItem}
      onChange={onChange}
    >
      {({
        highlightedIndex,
        isOpen,
        selectedItem,
        getToggleButtonProps,
        getItemProps,
        getLabelProps,
        getInputProps,
      }) => (
        <div>
          <Container
            {...props}
            options={{
              ...options,
              isOpen,
              styles: options.styles || {},
            }}
          >
            <div className="field-group">
              {label && <label {...getLabelProps()}>{label}</label>}
              <div className="input-wrapper">
                <input {...getInputProps()} value={selectedItem.name} />
                <button
                  className="control-button"
                  {...getToggleButtonProps({})}
                >
                  <ArrowDownIcon />
                </button>
                {/*<Transition
                  from={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}
                  config={springConfig.gentle}
                  native
                >
                  {isOpen
                    ? styles => (
                        <animated.div className="menu" style={styles}>
                          {items.map((item, index) => (
                            <Item
                              options={{
                                styles: options.itemStyles || {},
                                activeStyles: options.itemActiveStyles || {},
                                selectedStyles:
                                  options.itemSelectedStyles || {},
                                isActive: highlightedIndex === index,
                                isSelected: selectedItem === item,
                              }}
                              key={item.id}
                              {...getItemProps({ item })}
                            >
                              {item.name}
                            </Item>
                          ))}
                        </animated.div>
                      )
                    : null }
                </Transition>*/}
                {isOpen && (
                  <div className="menu">
                    {items.map((item, index) => (
                      <Item
                        key={index}
                        options={{
                          styles: options.itemStyles || {},
                          activeStyles: options.itemActiveStyles || {},
                          selectedStyles: options.itemSelectedStyles || {},
                          isActive: highlightedIndex === index,
                          isSelected: selectedItem === item,
                        }}
                        {...getItemProps({ item })}
                      >
                        {item.name}
                      </Item>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>
      )}
    </Downshift>
  )
}
