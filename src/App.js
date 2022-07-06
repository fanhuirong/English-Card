
import Header from './components/Header'
import CardItem from './components/CardItem';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <CardItem item={{rating:1, text:'heheooo'}} />
      </div>
    </div>
  );
}

export default App;
