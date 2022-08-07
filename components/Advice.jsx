import style from "../styles/Advice.module.scss"
import {FaEquals} from 'react-icons/fa'
import {BsFillDice5Fill} from 'react-icons/bs'




const Advice = ({ data }) => {
  return (
    <div className={style.card}>
      <p>Advice # </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, adipisci.</h1>
      <div className={style.underline}>
        <span></span>
        <FaEquals className={style.equaleIcons}/>
        <span></span>
      </div>
      <div className={style.dice}>
        <div 
        className={style.diceContainer}>
            <BsFillDice5Fill />
        </div>
      </div>
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  // const res = await fetch(`https:/jsonplaceholder.typicode.com/posts?_limit=6`);
  const data = await res.json();
  console.log(data)
  return {
    props: {
      data
    }
  }
}

export default Advice