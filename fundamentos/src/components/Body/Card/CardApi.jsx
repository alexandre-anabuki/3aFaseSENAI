// import { useEffect } from "react"
import { useState, useEffect } from "react"
import styles from "./Card.module.css"

export const CardApi = () => {

    //estudo de use no react

    // let contador = 0
    // const [contador, setContador] = useState(0)

    // const incrementaValor = () => {
    //     // contador++
    //     // console.log(contador)
    //     setContador(prev => prev+1)
    // }

    const [users, setUsers] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
        console.log(users)
    },[])
    
    return(
        <>
        {/* <p>{contador}</p>
        <button onClick={incrementaValor}>Incrementa</button> */}

        <div className={styles.cardContainerApi}>
            {
                users.map((user) =>(
                    <div className={styles.card} key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.address.street}</p>
                    </div>
                ))
            }

        </div>
        </>
    )
}

