import { useInterpret } from '@xstate/react'
import { createContext, useState } from 'react'
import { counterMachine } from './counter'
import { InterpreterFrom, Machine } from 'xstate'

export const GlobalStateContext = createContext<any>({})

export const GlobalStateProvider: React.FC = (props) => {
  const [stuff, setStuff] = useState(0)
  const counterService = useInterpret(counterMachine)

  return (
    <GlobalStateContext.Provider value={{ counterService, stuff, setStuff }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}
