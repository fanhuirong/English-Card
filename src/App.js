
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import CardList from './components/CardList';
import QuizSelect from './components/QuizSelect';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={ <><QuizSelect/><CardList/></>}
            ></Route>
            <Route path='/about' element={<> heheooo</>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
