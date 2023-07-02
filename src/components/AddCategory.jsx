import { useState } from 'react';
import PropTypes from 'prop-types';

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
        <form onSubmit={ onSubmit } aria-label='form'>
            <input
                type='text'
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>

    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};

