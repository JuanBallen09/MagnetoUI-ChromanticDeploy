import React from 'react'
import styled, { css } from 'styled-components'
import { ILinkProps, LinkType } from './Link.interface'

export const getTypeStyles = ({ type = 'link' }: { type: LinkType }) => {
  switch (type) {
    case 'link':
      return css<ILinkProps>`
        :visited {
          color: ${(props) => props.colorVisited};
        }
      `
    case 'button':
      return css<ILinkProps>`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        width: max-content;
        padding: 10px 20px;
        border: none;
        border-radius: 50px;
        background-color: ${(props) => props.btnColor};
        color: ${(props) => props.color};

        p {
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
          margin: 0px;
        }

        :hover {
          background-color: ${(props) => props.theme.colors.$gray5};
        }

        :visited {
          color: ${(props) => props.color};
        }
      `

    default:
      return css``
  }
}

export const withStyles = (c: React.FC<ILinkProps>): React.FC<ILinkProps> => styled(c)`
  color: ${(props) => (props.color ? props.color : props.theme.colors.gray1)};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${(props) => (props.colorHover ? props.colorHover : props.theme.colors.primary)};
  }

  ${(props) => getTypeStyles(props)}
`
