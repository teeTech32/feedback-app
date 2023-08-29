import PropTypes from 'prop-types'
function Card({children, reserve}) {
  return (
    // Conditional class
    // <div className={`card ${reserve && 'reserve'}`}>{children}</div>
     
    // Conditional Styles
    <div className="card" style={{
      backgroundColor:reserve ? 'rgba(0,0,0,0.4)': '#fff',
    color:reserve ? '#fff' : '#000'  }}>{children}</div>
  )
}

Card.defaultProps = {
  reserve:false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reserve: PropTypes.bool
}

export default Card