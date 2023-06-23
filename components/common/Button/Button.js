import React from 'react'
import { ButtonContent, LargeButtonContent } from './button.styles'

export const Button = (props) => {
  return (
    <ButtonContent onClick={props.onClick}>
      {props.title}
    </ButtonContent>
  )
}

export const ButtonLarge = (props) => {
  return(
    <LargeButtonContent onClick={props.onClick}>
      {props.title}
    </LargeButtonContent>
  )
}
