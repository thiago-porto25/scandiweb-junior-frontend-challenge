import { useState } from 'react'
import { Container, Modal } from './shared/components'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <button onClick={() => setOpen(true)}>toggle modal</button>

      <Modal isOpen={open} close={() => setOpen(false)}>
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
    </Container>
  )
}

export default App
