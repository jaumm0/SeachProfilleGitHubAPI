import { useState } from 'react'
import './App.css'
import Header from './componets/header'
import Main from './componets/main'
function App() {
  

  return (
    <div className='bg-BackgroundMain'>
      <section>
        <Header />
      </section>
      <section>
        <Main />
      </section>
    </div>
  )
}

export default App
