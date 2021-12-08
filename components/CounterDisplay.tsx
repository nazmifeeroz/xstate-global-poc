import { useActor } from '@xstate/react'
import React, { useContext } from 'react'
import { GlobalStateContext } from 'states/globalState'

const CounterDisplay = () => {
  console.log('render counter display')
  const globalState = useContext(GlobalStateContext)
  const [state] = useActor(globalState.counterService)

  return (
    <div>
      xState Counter: {state.context.counter} useState Counter:{' '}
      {globalState.stuff}{' '}
    </div>
  )
}

export default CounterDisplay
