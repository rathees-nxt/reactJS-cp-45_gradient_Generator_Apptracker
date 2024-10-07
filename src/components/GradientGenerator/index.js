import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  GradientContainer,
  Heading,
  DirectionPara,
  GradientDirectionList,
  PickColorDesc,
  PickColorContainer,
  PickColorAndInput,
  ColorValue,
  Input,
  GenerateBtn,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
    activeGradientDirection: gradientDirectionsList[0].value,
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  clickDirection = directionValue => {
    this.setState({activeGradientDirection: directionValue})
  }

  generateBackgroundImage = () => {
    const {firstColor, secondColor, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${firstColor}, ${secondColor}`,
    })
  }

  render() {
    const {firstColor, secondColor, gradientValue, activeGradientDirection} =
      this.state
    return (
      <>
        <AppContainer
          data-testid="gradientGenerator"
          gradientValue={gradientValue}
        >
          <GradientContainer>
            <Heading>Generate a CSS Color Gradient</Heading>
            <DirectionPara>Choose Direction</DirectionPara>
            <GradientDirectionList>
              {gradientDirectionsList.map(item => (
                <GradientDirectionItem
                  key={item.directionId}
                  gradientDirectionDetails={item}
                  clickDirection={this.clickDirection}
                  isActive={activeGradientDirection === item.value}
                />
              ))}
            </GradientDirectionList>
            <PickColorDesc>Pick the Colors</PickColorDesc>
            <PickColorContainer>
              <PickColorAndInput>
                <ColorValue>{firstColor}</ColorValue>
                <Input
                  onChange={this.onChangeFirstColor}
                  type="color"
                  value={firstColor}
                />
              </PickColorAndInput>
              <PickColorAndInput>
                <ColorValue>{secondColor}</ColorValue>
                <Input
                  onChange={this.onChangeSecondColor}
                  type="color"
                  value={secondColor}
                />
              </PickColorAndInput>
            </PickColorContainer>
            <GenerateBtn onClick={this.generateBackgroundImage} type="button">
              Generate
            </GenerateBtn>
          </GradientContainer>
        </AppContainer>
      </>
    )
  }
}

export default GradientGenerator
