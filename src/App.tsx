import { Routes,Route,Link}from "react-router-dom"
import About from "./components/About"
import Cart from "./components/Cart"
import Detail from "./components/cart/detail"
import Home from "./components/Home"
import Users from "./components/Users"
import Collections from "./components/users/Collections"
import Info from "./components/users/Info"
import Score from "./components/users/Score"

function App() {


  return (
    <div className="container">
      <div className="nav">
        <Link to="/">[首页]</Link>
        <Link to="/About">[关于]</Link>
        <Link to="/Cart">[购物]</Link>
        <Link to="/Users">[我的]</Link>
        <Link to="/">[世界]</Link>
      </div>
      <div className="main">
        
   
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
           <Route path="/about/*" element={<About />} />
          <Route path="/Cart" element={<Cart />}/>
          <Route path="/Cart/:id" element={<Detail/>}/>
          <Route path="/Users" element={<Users />}>
            <Route path="Info" element={<Info/>}/>
            <Route path="Score" element={<Score />} />
            <Route path="Collections" element={<Collections />}/>
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
