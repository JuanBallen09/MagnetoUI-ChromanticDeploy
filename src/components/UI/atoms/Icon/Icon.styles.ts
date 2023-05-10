import styled, { css } from 'styled-components'
import { IconProps } from './Icon.interface'

const hover = ({ hover = true }) => {
  if (hover) {
    return css`
      transition: all ease-in 0.2s;
      &:hover {
        transform: scale(1.1);
      }
    `
  }
}

export const withStyles = (c: React.FC<IconProps>): React.FC<IconProps> => styled(c)`
  ${(props) => hover(props)}
`
