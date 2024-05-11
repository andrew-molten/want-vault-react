import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
      <h1>Want Vault</h1>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  )
}

export default App
