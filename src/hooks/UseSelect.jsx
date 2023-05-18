import React, { useState } from 'react'


const useSelect = (initialState,options) => {
    const [category, setCategory] = useState(initialState)

    const ShowSelect = () => (
        <select 
        name="category" 
        className='browser-default'
        value={category}
        onChange={e => setCategory(e.target.value)}>
            
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}
        </select>

    )

    return [category,ShowSelect]


}

export default useSelect