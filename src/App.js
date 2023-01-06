import React from 'react'
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Stage1 from "./levels/Stage1"
// import Stage2 from "./levels/Stage2"
// import Index from "./components/Finish/Index"

export default function App() {
  return (
    <div>
      <Stage1 />
       {/* <BrowserRouter>
       <Link to='/Stage2'>Next Stage</Link>
       <Switch>
         <Route exact path="/Stage2">
           <Stage2 />
         </Route>
       </Switch>
       </BrowserRouter> */}
    </div>
  )
}
