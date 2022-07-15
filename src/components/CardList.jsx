import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import CardItem from './CardItem';
import CardContext from '../context/CardContext';
// NOTE: added layout prop for nicer animation
// https://www.framer.com/docs/animation/#layout-animations

function CardList() {
  const { cardList, isLoading } = useContext(CardContext)

  // if (!isLoading && (!feedback || feedback.length === 0)) {
  //   return <p>No Content Yet</p>
  // }

  return  (
    <div className='feedback-list'>
      <AnimatePresence>
        {cardList.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <CardItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

}

export default CardList