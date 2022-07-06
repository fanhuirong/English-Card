import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from '../common/Card'


function CardItem({ item }) {

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button  className='close'>
        <FaTimes color='purple' />
      </button>
      {/* <button className='edit'>
        <FaEdit color='purple' />
      </button> */}
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default CardItem