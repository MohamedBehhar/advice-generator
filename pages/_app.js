import '../styles/globals.css'
import Layout from '../components/Layout'
import Advice from '../components/Advice'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
