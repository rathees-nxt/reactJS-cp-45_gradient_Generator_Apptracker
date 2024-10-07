// Style your elements here
import styled from 'styled-components'

export const GradientItemList = styled.li`
  list-style-type: none;
  width: 48%;
  @media screen and (min-width: 768px) {
    width: 23%;
  }
`

export const DirectionBtn = styled.button`
  bacground-color: #ffffff;
  font-family: roboto;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
`
