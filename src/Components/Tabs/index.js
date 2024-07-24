import './index.css'

const Tabs = props => {
  const {tabDetails, onClickItem, activeId} = props
  const {menuCategory, menuCategoryId} = tabDetails

  const onClicknow = () => {
    onClickItem(menuCategoryId)
  }

  return (
    <li
      className={`li-item ${menuCategoryId === activeId ? 'actives' : ''} `}
      onClick={onClicknow}
    >
      {menuCategory}
    </li>
  )
}

export default Tabs
