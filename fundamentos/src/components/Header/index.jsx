import styles from './Header.module.css'


const Header = ({titulo})=>{
    return(
        <>
        <header className={styles.header}>
            <h1 className={styles.title}>{titulo}</h1>
        </header>
        </>
    )
}

export default Header