import React, { useState } from 'react'
import './App.css'
import Modal from './modal'

function App () {
  const [visible, setVisible] = useState(false)
  return (
    <section className='top-bottom absolute'>
      <article>
        <header className='top'>
          {' '}
          <span
            onClick={() => {
              window.location.reload()
            }}
          >
            BROCCOLI & CO.
          </span>
        </header>
        <div className='middle'>
          <p className='line-1'>A better way</p>
          <p className='line-2'>to enjoy every day.</p>
          <p className='line-3'>Be the first to know when we launch.</p>
          <div
            className='button'
            onClick={() => {
              setVisible(true)
            }}
          >
            Request an invite
          </div>
          {visible ? <Modal setVisible={setVisible} /> : null}
        </div>
        <footer className='bottom'>
          <p className='line-1'>Made with ❤ in Melbourne.</p>
          <p className='line-2'>© 2016 Broccoli & Co. All rights reserved.</p>
        </footer>
      </article>
    </section>
  )
}

export default App
