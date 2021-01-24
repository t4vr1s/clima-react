import PropTypes from 'prop-types'

export const Clima = ({ result }) => {
  const { name, main } = result
  if (!name) return null
  const kelvin = 273.15

  return (
    <div className='card-panel white col s12'>
      <div className='black-text'>
        <h2>El clima de {name} es:</h2>
        <p className='temperatura'>{Math.round(main.temp - kelvin)}
          <span>&#x2103;</span>
        </p>
        <p>{Math.round(main.temp_max - kelvin)}
          <span>&#x2103;</span>
        </p>
        <p>{Math.round(main.temp_min - kelvin)}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  )
}

Clima.propTypes = {
  result: PropTypes.object.isRequired
}
