// Write your code here
import './index.css'

const LanguagesFilterItem = props => {
  const {item, activeButton, buttonStyle} = props
  const {id, language} = item
  const className = buttonStyle ? 'button active-button' : 'button'

  const onClickButton = () => {
    activeButton(id)
  }

  return (
    <li className="button-element">
      <button className={className} type="button" onClick={onClickButton}>
        {language}
      </button>
    </li>
  )
}

export default LanguagesFilterItem
