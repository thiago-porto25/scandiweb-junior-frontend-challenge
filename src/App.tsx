import { useState } from 'react'
import { Modal } from './shared/components'
import { GlobalLayout } from './shared/layouts'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <GlobalLayout>
      <button onClick={() => setOpen(true)}>toggle modal</button>

      <Modal isOpen={open} close={() => setOpen(false)} overlayTopMargin={80}>
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '40px',
            backgroundColor: 'black',
            color: 'red',
            width: '200px',
            height: '500px',
          }}
        ></div>
      </Modal>
    </GlobalLayout>
  )
}

export default App
