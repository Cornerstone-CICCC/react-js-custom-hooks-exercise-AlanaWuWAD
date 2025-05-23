import './App.css'
import useTime from './hooks/useTime'

const App = () => {
  const day = useTime<string>("day") // Friday
  const hour = useTime<string>("hour") // 11
  
  return (
    <div>
      <h3>Day: {day}</h3>
      <h3>Hour: {hour}</h3>
    </div>
  )
}

export default App