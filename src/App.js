import { useEffect, useState } from 'react'
import { Clima } from './components/Clima'
import { Error } from './components/Error'
import { Form } from './components/Form'
import { Header } from './components/Header'

const initialState = {
  ciudad: '',
  pais: ''
}

function App () {
  const [search, setSearch] = useState(initialState)
  const [find, setFind] = useState(false)
  const [result, setResult] = useState({})
  const [error, setError] = useState(false)

  const { ciudad, pais } = search

  useEffect(() => {
    const appid = '8e82b5503de516458a6493c6bb64182f'

    const consultarApi = async () => {
      if (find) {
        const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`
        const resp = await fetch(urlApi) //eslint-disable-line
        const data = await resp.json()
        console.log(data)

        setResult(data)
        setFind(false)

        if (data.cod === '404') {
          setError(true)
        } else {
          setError(false)
        }
      }
    }
    consultarApi()
  }, [find])

  let component
  if (error) {
    component = <Error mensaje='No existen resultados para esa busqueda' />
  } else {
    component = <Clima result={result} />
  }

  return (
    <>
      <Header titulo='Clima React App' />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form setFind={setFind} search={search} setSearch={setSearch} />
            </div>
            <div className='col m6 s12'>
              {component}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
