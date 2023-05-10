import styled from 'styled-components'
import { IHeaderDrawerCompany } from './HeaderDrawerCompany.interface'

export const withStyles = (c: React.FC<IHeaderDrawerCompany>): React.FC<IHeaderDrawerCompany> => styled(c)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.spacing}px;

  img:nth-child(3) {
    height: 20px;
    width: 25px;
    overflow: hidden;
    border-radius: 4px;
  }
`
