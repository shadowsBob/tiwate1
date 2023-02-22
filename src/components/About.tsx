import {Routes,Route,Link} from 'react-router-dom'
import Cluture from './about/Cluture'
import Company from './about/Company'
import Us from './about/Us'

function About() {
  return (
    <div>
      <h1>关于</h1>
      <Link to="/about/us">[关于我们]</Link>
      <Link to="/about/company">[关于企业]</Link>
      <Link to="/about/culture">[关于文化]</Link>
      <hr />
      <Routes>
        <Route path='us' element={    <Us/>}/>
        <Route path='culture' element={<Cluture/>}/>
        <Route path='company' element={<Company/>}/>
      </Routes>
    </div>
  )
}

export default About;