import { createMachine, assign } from 'xstate'

interface Context {
  counter: number
}

type Event = { type: 'INC' }

type States = { value: 'idle'; context: Context }

export const counterMachine = createMachine<Context, Event, States>({
  initial: 'idle',
  context: {
    counter: 0,
  },
  states: {
    idle: {
      on: {
        INC: {
          actions: assign({ counter: (ctx) => ctx.counter + 1 }),
        },
      },
    },
  },
})
