import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback, isStat} = useContext(FeedbackContext)

   let Average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0)/feedback.length
 
 Average = Average.toFixed(1).replace(/[.,]0$/, '')
  
 return isStat ? ( <div className="feedback-stats">
 <h4 className="Rvw">0 : Review</h4>
 <h4 className="Ave">Average rating : 0.0</h4> 
</div>):(
  <div className="feedback-stats">
    <h4 className="Rvw">{feedback.length} : Reviews</h4>
    <h4 className="Ave">Average rating : {isNaN(Average) ? 0 : Average }</h4> 
  </div>
)
 
}
export default FeedbackStats