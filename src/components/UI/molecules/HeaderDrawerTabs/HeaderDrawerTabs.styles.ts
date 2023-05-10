import styled from 'styled-components'
import { IHeaderDrawerTabs } from './HeaderDrawerTabs.interface'
import { screenSize } from '../../../../constants/responsive.constants'

export const withStyles = (c: React.FC<IHeaderDrawerTabs>): React.FC<IHeaderDrawerTabs> => styled(c)`
  display: flex;
  gap: ${(props) => (props.spacing ? props.spacing : 20)}px;
  @media (min-width: ${screenSize.md}px) {
    gap: ${(props) => (props.spacing ? props.spacing : 5)}px;
  }
  align-items: center;
`
