import Card from "../components/shared/Card"
import{Link} from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project </h1>
        <p>This is a feedback app that gives remarks on a product and a service </p>
        <p>Version: 1.0.0 </p>
        <p>
          <Link to="/">Back Home</Link>
        </p>
      </div>
    </Card>
    
  )
}

export default AboutPage