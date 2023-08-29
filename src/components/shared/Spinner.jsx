import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
    <img 
      src={spinner} 
      alt='Loading...'
      style={{width:'100%', margin:'auto', display:'block', color:'red'}}
  />

  )
 
}

export default Spinner