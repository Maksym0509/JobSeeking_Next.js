import React from 'react'
import { StyledTextLabel } from './textLabel.styles'

export const TextLabel = (props) => {
  return (
    <StyledTextLabel>
      {props.text}
    </StyledTextLabel>
  )
}
