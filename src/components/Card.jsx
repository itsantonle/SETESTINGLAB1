import PropTypes from 'prop-types'

const Card = ({ children, bg = 'bg-gray-100' }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
}
export default Card

Card.PropTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
}
