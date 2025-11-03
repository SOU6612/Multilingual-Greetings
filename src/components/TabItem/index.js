import './index.css'

const TabItem = props => {
  const {tabItemDetails, isActive, changeState} = props
  const {id, buttonText} = tabItemDetails
  const buttonClass = isActive ? 'activeEl' : 'notActive'
  const ok = () => {
    changeState(id)
  }

  return (
    <li className="button-list">
      <button className={buttonClass} type="button" onClick={ok}>
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
