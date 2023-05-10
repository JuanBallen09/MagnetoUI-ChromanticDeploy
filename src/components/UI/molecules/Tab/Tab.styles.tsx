import styled from 'styled-components'
import { ITab } from './Tab.interface'

export const withStyles = (c: React.FC<ITab>): React.FC<ITab> => styled(c)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  width: 200px;
  height: 24px;
  padding: 2px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.$gray5};
`
