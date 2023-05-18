import React from 'react'
import styles from "./Form.module.css"
import useSelect from '../hooks/UseSelect'
import PropTypes from "prop-types"
const Form = ({setCategoryRequired}) => {
   // 78f63796b3fb43bd9230ab65376e8eab
    const options = [
        {value: "general",name: "general"},
        {value: "business",name: "Negocios"},
        {value: "entertainment",name:"entretenemiento" },
        {value: "science",name: "Ciencia"},
        {value: "sport",name:"Deportes"},
    ]

    const [category, showCategory] = useSelect("general", options)
    const handleSubmit = (e) => {
        e.preventDefault()
        setCategoryRequired(category)
    }
  return (
    <div className={`row ${styles.searcher}`}>
        <form onSubmit={handleSubmit} className='col s12 m8 offset-m2'>
            <h2 className={styles.heading}>encuentra noticias por Categoria</h2>
            {showCategory()}
            <div className='input-field col s12'>
                <input 
                type="submit"
                className={`${styles.btn_block} btn-large amber danker-2`}
                value="Buscar" />
            </div>
        </form>
    </div>
  )
}

Form.propTypes = {
    setCategoryRequired: PropTypes.func.isRequired
}

export default Form