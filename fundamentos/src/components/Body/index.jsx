import Card from "./Card"
import styles from "./Body.module.css"
import { CardApi } from "./Card/CardApi"


function Body(){
    const usuarios = [
        {nome:"Ana", idade:22, cidade:"São Paulo"},
        {nome:"Bruno", idade:30, cidade:"Florianópolis"},
        {nome:"Carlos", idade:25, cidade:"Rio de Janeiro"},
    ]

    return(
        <main className={styles.body}>
            <h2>Usuários Cadastrados</h2>
            <div className={styles.cardContainer}>
                {usuarios.map((usuario, index) => (
                    <Card
                    key={index}
                    nome={usuario.nome}
                    idade={usuario.idade}
                    cidade={usuario.cidade}
                    />
                ))}
                {/* <Card /> */}
            </div>

            <h2>Usuarios vindo da API</h2>
            <div className={styles.cardContainer}>
                <CardApi />
            </div>

        </main>
    )
}

export default Body