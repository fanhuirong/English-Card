
import { Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function Redirect() {
  const status = 200
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/about')
  }

  if(status === 404){
    return <Navigate to='/notfound'/>
  }
  
  return <>
    <button onClick={onClick}>heheooo</button>
      <Routes>
        <Route path='/test' element={<>Nested Routes</>} />
      </Routes>
  </>
}

export default Redirect