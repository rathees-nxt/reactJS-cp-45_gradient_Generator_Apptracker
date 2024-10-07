// Write your code here
import {GradientItemList, DirectionBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, isActive, clickDirection} = props
  const {displayText, value} = gradientDirectionDetails

  const onClickDirection = () => {
    clickDirection(value)
  }

  return (
    <GradientItemList>
      <DirectionBtn
        onClick={onClickDirection}
        type="button"
        isActive={isActive}
      >
        {displayText}
      </DirectionBtn>
    </GradientItemList>
  )
}

export default GradientDirectionItem
