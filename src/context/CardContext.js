

import { createContext, useState, useEffect } from 'react'

const CardContext = createContext()

export const CardProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [cardList, setCardList] = useState([{id:1, question: 'hello?', text:'item',rating:10}])
  const [cardEdit, setCardEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchCardList()
  }, []);

  const fetchCardList = async () => {
    const response = await fetch('http://localhost:5000/data')
    const data = await response.json()
    console.log(data)
  }
  
  return <CardContext.Provider value={{cardList, isLoading }}> { children }</CardContext.Provider>
}

export default CardContext;