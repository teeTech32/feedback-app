import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import Feedbackitem from "./Feedbackitem"
import Spinner from './shared/Spinner'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)
  
  if(!isLoading && (!feedback || feedback.length === 0)){
    return <Spinner/>
  }

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <Feedbackitem key={item.id} item={item} handleFeedback = {handleDelete} />
  //     )
  //   )
  // }
  //   </div>
  // )
 return isLoading ? (<div>
                        <h1>Loading...</h1>
                        <Spinner/>
                    </div>) : ( <div className="feedback-list">
 <AnimatePresence>
     {feedback.map((item) => (
       <motion.div 
       key={item.id}
       initial={{opacity: 0 }}
       animate={{opacity: 1 }}
       exit={{opacity: 0 }}
       >
          <Feedbackitem key={item.id} item={item}/>
       </motion.div>
      
     )
   )
 }
 </AnimatePresence>
 
</div>)

}
export default FeedbackList