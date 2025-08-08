import styles from './Card.module.css'

const Card = ({nome, idade, cidade}) =>{
    return(
        <div className={styles.card}>
            <h3>{nome}</h3>
            <p>Idade: {idade}</p>
            <p>Cidade: {cidade}</p>
        </div>
    )
}

export default Card