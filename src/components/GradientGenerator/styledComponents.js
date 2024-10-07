// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  font-family: roboto;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const DirectionPara = styled.p`
  font-family: roboto;
  font-size: 24px;
  font-weight: 500;
  color: #ededed;
`
export const GradientDirectionList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 70%;
    max-width: 450px;
  }
`
export const PickColorDesc = styled.p`
  font-family: roboto;
  font-size: 24px;
  font-weight: 500;
  color: #ededed;
`

export const PickColorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 250px;
`

export const PickColorAndInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  font-family: roboto;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
`

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  height: 50px;
  width: 100px;
`

export const GenerateBtn = styled.button`
  font-family: roboto;
  font-size: 14px;
  font-weight: 500;
  color: #334155;
  padding: 15px;
  border-radius: 7px;
  background-color: #00c9b7;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 30px;
  width: 120px;
`
