/* eslint-disable react/no-unknown-property */
import './index.css'

const HistoryItem = props => {
  const {details, remaininglist} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const onDelete = () => {
    remaininglist(id)
  }

  return (
    <li className="lists">
      <div className="list">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="image" />
        <p className="title">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div className="button">
        <button
          type="button"
          data-testid="delete"
          className="buttons"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
