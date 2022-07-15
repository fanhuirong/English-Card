react 只创建视图层，

## install

`npx create-react-app feedback-app --use-npm`
we will use npm with yarn

`npx create-react-app feedback-app --template typescript`

## upgrade react18
<https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis>
## <></>
`<div></div>` & `<></>`后者不会在文档里渲染出多余的标签，适合给react组件做根标签包裹元素

## state
`state` 分为 `local state` 和 `global state`

`global state` 使用 `context` 管理

## useState
`[rate, setRate] = useState(0)`
you can use it
`setRate(10)`
or
`setRate((prev) => {return prev +1})`

## 样式包裹组件
```js
function Card({ children, reverse }) {
  return (
    <div
      className='card'
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  )
}
```

## router6
`Routes` `element`
```js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
<Router>
    <Routes>
      <Route
        path='/'
        element={<CardList/>}
      ></Route>
      <Route path='/about' element={<> heheooo</>} />
    </Routes>
</Router>
```

## Link vs NavLink

<https://reactrouter.com/docs/en/v6/components/nav-link>

## useParams
```js
 <Route path='/about/:id/:name' element={<> heheooo</>} />


import {useParams} from 'react-router-dom'
const params = useParams();
console.log(params.id, params.name)

```

## useContext
store and use global state and function
```js
// TIPS: CardProvider not the default export, so need {} around it
import { CardProvider } from './context/CardContext';

```