import styles from './Footer.module.css'

const Footer = ({texto})=>{
    return(
        <>
        <footer className={styles.footer}>
            <p className={styles.subtitle}>{texto}</p>
        </footer>
        </>
    )
}

export default Footer