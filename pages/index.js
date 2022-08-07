import Head from 'next/head'
import Advice from '../components/Advice'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Advice Generator</title>
      </Head>
      <Advice />
    </div>
  )
}
