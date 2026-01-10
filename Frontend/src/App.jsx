import React from 'react'
import Approutes from './routes/Approutes'
import { UserProvider } from './context/Usercontext'
const App = () => {
  return (
    <div>
      <UserProvider>
        <Approutes />
      </UserProvider>
    </div>
  )
}

export default App
