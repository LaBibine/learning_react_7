import React, {useState, useEffect} from 'react';
import { render } from "react-dom";

function useIncrement (initial, step) {
  const [count, setCount] = useState(initial)
  const increment = () => {
    setCount(count => count + step)
  }
  return [count, increment]
}

{/*function Compteur () {
  const [count, increment] = useIncrement(0, 2)
  useEffect(() => {
    document.title = 'Compteur ' + count
  }, [count])
  return <button onClick={increment}>Incrémenter {count}</button>
}*/}

function Compteur () {
  const [count, increment] = useIncrement(0, 2)

  useEffect(() => {
    window.setInterval(() => {
      console.log('Hello')
      increment()
    }, 1000)
    return function () {
      clearInterval(timer)
    }
  }, [])
  return <button onClick={increment}>Incrémenter {count}</button>
}

  useEffect (() => {
    document.title = 'Compteur ' + count
  }, [count])
render (
  <div>
    <Compteur />
  </div>,
  document.getElementById('root')
)

window.setTimeout(() => {
  render(
    <div>Bonjour</div>,
    document.getElementById('root')
  )
}, 2000)