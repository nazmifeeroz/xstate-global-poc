import Counter from 'components/Counter'
import CounterDisplay from 'components/CounterDisplay'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '_styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <CounterDisplay />
      <Counter />
    </div>
  )
}

export default Home
