import styled from 'styled-components'
import { IDrawerOrganism } from './DrawerOrganism.interface'
import { screenSize } from '../../../../constants/responsive.constants'

export const withStyles = (c: React.FC<IDrawerOrganism>): React.FC<IDrawerOrganism> => styled(c)`
  & > div {
    display: flex;
  }
`

export const MenuContainer = styled.div`
  @media (min-width: ${screenSize.md}px) {
    margin-top: 40px;
  }
`

export const ActiosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: ${screenSize.md}px) {
    gap: 25px;
    margin-top: 40px;
  }
`
