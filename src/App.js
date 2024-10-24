import { useEffect } from 'react'
import './App.css'
import ItemList from './components/ItemList/itemList'

function App() {
  return (
    // useEffect(() => {
    //   fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then((response) => response.json())
    //     .then((json) => console.log(json))
    // }, [])

    <ItemList />
  )
}

export default App
