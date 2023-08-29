 import { useState, useContext, useEffect } from 'react'
 import Card from './shared/Card'
 import Button from './shared/Button'
 import RatingSelect from './RatingSelect'
 import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState()
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [messages, setMessages] = useState('')

  const {addFeedback,feedbackEdit,updateFeedback,setIsLoading, setIsStat} = useContext(FeedbackContext)

  useEffect(()=>{
    if(feedbackEdit.edit===true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  },[feedbackEdit])

  const handleTextChanged = (e) => {
    if(text===''){
      setBtnDisabled(true)
      setMessages(null)
    }else if(text!=='' && text.trim().length <= 10){
      setBtnDisabled(true)
      setMessages('Text must be at lease 10 characters')
    }else{
      setBtnDisabled(false)
      setMessages(null)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setIsStat(true)
    if(text.trim().length > 10){
      const newFeedback = {
        text,
        rating
      }
      if(feedbackEdit.edit===true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }else{
        addFeedback(newFeedback)
      }
      setText('')
      setBtnDisabled(true)
    }
    setTimeout(()=>{setIsLoading(false) 
                    setIsStat(false)}, 3000)
  }
  return (
    <Card>
      <form className='form' onSubmit={handleSubmit}>
        <h2 className='form-h2'>How would you rate your service with us?</h2>
        <RatingSelect select = {(rating)=>setRating(rating)}/>
        <div className="form-group">
          <input type="text" 
          className='form-input' 
          onChange={handleTextChanged} 
          placeholder='Write a review' 
          value={text} />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
        {messages && <div className='messages'>{messages}</div>}
      </form> 
    </Card>
    
  )
}

export default FeedbackForm