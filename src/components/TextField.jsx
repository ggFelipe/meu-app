import styles from './TextField.module.css'

function TextField(props) {
    const {type, placeholder} = props
    
    return(
        <input className={styles.textField} type={type} placeholder={placeholder} >
        
        </input>
    )
}
export default TextField