import { useActor } from '@xstate/react'
import React, { useContext } from 'react'
import { GlobalStateContext } from 'states/globalState'

const Counter = () => {
  const globalState = useContext(GlobalStateContext)
  console.log('render counter button')

  return (
    <div>
      <button onClick={() => globalState.counterService.send('INC')}>
        increase (xstate)
      </button>
      <button onClick={() => globalState.setStuff(globalState.stuff + 1)}>
        increase (usestate)
      </button>
    </div>
  )
}

export default Counter
