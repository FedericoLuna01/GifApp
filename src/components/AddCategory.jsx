import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = e => {
        setInputValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(inputValue.trim().length <= 1) return;

        onNewCategory(inputValue)
        setInputValue('')
    }

  return (
    <form 
    onSubmit={handleSubmit} 
    aria-label="form" 
    className="flex flex-col justify-center items-center gap-3"
    >
        <input 
            type="text" 
            placeholder="Busca un gif"
            value={inputValue}
            onChange={handleChange}
            className="text-black font-semibold focus:outline-violet-400 bg-slate-300 py-2 px-4 rounded outline-none placeholder:text-gray-600"
        />
        <button
            className="bg-violet-700 hover:bg-violet-400 text-white font-bold py-2 px-4 rounded mt-2"
        >
            Buscar
        </button>
    </form>
  )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
    
}