import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'


export const SearchProduct = () => {
    const [inputValue, setInputValue]=useState('')
    const navigate = useNavigate();

    const onInputChange = (event)=>{
        setInputValue(event.target.value)
    }
    
    const onSubmit = (event)=>{
        
        event.preventDefault()
        if( inputValue.trim().length <=1 ) return 
        
        navigate(`/search?prod=${inputValue}`)
        setInputValue('')
        
    }

    return (
        
        <form onSubmit={onSubmit} className="form-inline mr-4 d-flex" role="search">
            
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onInputChange}/>
        </form>
        
    )
}
