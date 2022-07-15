
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import CardList from './components/CardList';
import QuizSelect from './components/QuizSelect';
import Redirect from './components/Redirect';
// TIPS: CardProvider not the default export, so need {} around it
import { CardProvider } from './context/CardContext';

function App() {
  const [rating, setRating] = useState(10)
  return (
    <CardProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={ <><QuizSelect select={setRating} selected={rating}/><CardList/></>}
            ></Route>
            <Route path='/about' element={<> heheooo</>} />
            <Route path='/redirect/*' element={<Redirect/>} />
          </Routes>
        </div>
      </Router>
    </CardProvider>
  );
}

export default App;
