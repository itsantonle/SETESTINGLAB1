import PropTypes from 'prop-types'
import ClipLoader from 'react-spinners/ClipLoader'

const override = {
  display: 'block',
  margin: '100px auto',
}

const Spinner = ({ loading = true, color = '#4338ca' }) => {
  return (
    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={150}
    />
  )
}
export default Spinner

Spinner.PropTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
}
