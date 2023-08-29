import PropTypes from 'prop-types'

function Button({children, type, version, isDisabled }) {

  return (
    
    <button type={type} disabled ={isDisabled} className = {`btn btn-${version}`} style={{backgroundColor:isDisabled ? '#ff6a95' : 'black',color:isDisabled ? '#000' : '#fff'}}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type:'button',
  version: 'secondary',
  isDisabled:false
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDisable: PropTypes.bool

}

export default Button