import { useState } from 'react'

const initialInputValue = '';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState(initialInputValue);

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const newValue = inputValue.trim();

        if (newValue.length <= 1) return;
        
        onNewCategory( newValue );
        setInputValue(initialInputValue);
    };

    return (
        <form onSubmit={ onSubmit }>
            <input
                type='text'
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>

    )
}

