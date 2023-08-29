import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { FeedbackProvider } from "./context/FeedbackContext"
import AboutPage from "./pages/AboutPage"
import AboutLinkIcon from "./pages/AboutLinkIcon"
import Post from "./components/Post"

function App(){
  return (
    <FeedbackProvider>
      <Router>
          <Link exact to='/'>
            <Header/>
          </Link>
            <div className="container">
              <Routes>
                <Route exact path="/" element={
                    <>
                      <FeedbackForm/>
                      <FeedbackStats /> 
                      <FeedbackList/>  
                    </>
                  }/> 
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/post/*" element={<Post/>}/>
              </Routes>
              <AboutLinkIcon/>
            </div>
      </Router>
    </FeedbackProvider>
         )
  }
export default App