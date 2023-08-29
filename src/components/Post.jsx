import { Navigate, useNavigate, Routes, Route } from "react-router-dom"

function Post() {
  const navigate = useNavigate()

  const onClick = ()=>{
  navigate('/about')
  }

  const status = 200
  if(status===404){
    return <Navigate to='/notfound'/>         
  }

  return (
    
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Good Day Every One</h1>}/>
        <Route path="/aboutcompany" element={<h1>This is a building construction company that deals with Tilling, Stones Interknocking, Mason works e.t.c </h1>}/>
        <Route path="/nowselling" element={<h1>These are the sellable goods</h1>}/>
      </Routes>
    </div>
  )
}

export default Post