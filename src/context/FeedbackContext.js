import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=>{
  const [isStat, setIsStat] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit:false
  })

  useEffect(()=>{
    fetchFeedback()
  }, [])

  const fetchFeedback = async() => {
    const response = await fetch(`http://localhost:5000/feedback?`)
    const data = await response.json()
    setFeedback(data)
  }
  
  const deleteFeedback = async(id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setIsLoading(true)
      setIsStat(true)
      await fetch(`http://localhost:5000/feedback/${id}`,{method:'DELETE'})
      setFeedback(feedback.filter((item) => item.id !==id))
      setTimeout(()=>{setIsLoading(false)
                      setIsStat(false)},3000)
    }
  }

  const addFeedback = async(newFeedback) =>{
    const response = await fetch(`http://localhost:5000/feedback?`, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(newFeedback)
    })
    const data = await response.json()
    setFeedback([data, ...feedback])
  }

  const editFeedback = (item) =>{
    setIsStat(true)
    setIsLoading(true)
    setTimeout(()=>{setFeedbackEdit({
      item,
    edit:true
    })
    setIsLoading(false)
    setIsStat(false)}, 3000)
  }

  const updateFeedback = async(id, upditem)=>{
    const response = await fetch(`http://localhost:5000/feedback/${id}?`,{
      method:'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(upditem)
    })
    const data = await response.json()
    setFeedback(
      feedback.map((item)=>(item.id === id ? {...item, ...data}: item))
    )
  }

  return<FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            isLoading,
            isStat,
            setIsLoading,
            setIsStat,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback, 
          }}>
         {children}
        </FeedbackContext.Provider>

}
export default FeedbackContext