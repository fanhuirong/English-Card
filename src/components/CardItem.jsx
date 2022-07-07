import { FaTimes, FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Card from '../common/Card'
function CardItem({ item }) {
  const [show, setShow] = useState(false)

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close'>
        <FaTimes color='purple' />
      </button>
      <button className='angle' onClick={()=>setShow(!show)}>
        {!show &&<FaAngleDown color='purple' />}
        {show && <FaAngleUp color='purple' />}
      </button> 
      <h3 >{item.question}</h3>

      {show && <div className='text-display'>{item.text}</div>}
    </Card>
  )
}

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default CardItem