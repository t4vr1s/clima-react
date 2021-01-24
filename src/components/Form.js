import { useState } from 'react'
import { Error } from './Error'
import PropTypes from 'prop-types'

export const Form = ({ search, setSearch, setFind }) => {
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const { ciudad, pais } = search
    if (ciudad === '' || pais === '') {
      return setError(true)
    }

    setError(false)
    setFind(true)
  }

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      {error && <Error mensaje='Los campos son obligatorios' />}
      <div className='input-field col s12'>
        <input
          type='text'
          name='ciudad'
          id='ciudad'
          autoComplete='off'
          onChange={handleChange}
        />
        <label htmlFor='ciudad'>Ciudad:</label>
      </div>

      <div className='input-field col s12'>
        <select
          name='pais'
          id='pais'
          onChange={handleChange}
        >
          <option value=''>--Seleccione un país--</option>
          <option value='CL'>Chile</option>
          <option value='MX'>México</option>
          <option value='AR'>Argentina</option>
          <option value='CO'>Colombia</option>
          <option value='CR'>Costa Rica</option>
          <option value='ES'>España</option>
          <option value='PE'>Perú</option>
        </select>
        <label htmlFor='pais'>País:</label>
      </div>

      <div className='input-field col s12'>
        <button
          type='submit'
          className='waves-effect waves-light btn-large btn-block yellow accent-4 col s12'
        >Buscar Clima
        </button>
      </div>
    </form>
  )
}

Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setFind: PropTypes.func.isRequired
}
