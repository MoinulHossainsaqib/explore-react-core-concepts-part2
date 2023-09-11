import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './usres'
import Friends from './friends'

function App() {
 
function handleClick(){
  alert('button clicked')
}
const handleClick2 = () =>{
  alert('button 2 clicked')
}
  return (
    <>
      <h3>React Core concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Button 2</button>
      <button onClick={() => {alert('third button clicked')}}>Third button</button>
    </>
  )
}

export default App
