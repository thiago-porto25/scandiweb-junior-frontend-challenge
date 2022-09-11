import React from 'react'

import { GlobalLayout } from './shared/layouts'
import { Modal } from './shared/components'

class App extends React.Component {
  state = {
    open: false,
  }

  render(): React.ReactNode {
    return (
      <GlobalLayout>
        <button onClick={() => this.setState({ open: true })}>
          toggle modal
        </button>

        <Modal
          isOpen={this.state.open}
          close={() => this.setState({ open: false })}
          overlayTopMargin={80}
        >
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
}

export default App
