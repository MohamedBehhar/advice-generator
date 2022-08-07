import style from '../styles/Layout.module.scss'
import Advice from './Advice'

const Layout = ({children}) => {
  return (
	<div className={style.container}>
		<main className={style.main}>
			{children}
		</main>
	</div>
  )
}

export default Layout