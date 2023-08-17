import {useState} from 'react'

import Style from './dropdown.module.css'

function Dropdown() {

    // Declared a array in which we will loop over and display as option
     const list = ["Yes", "Definitely", "Definitely Not", "Not Sure"];

    //  use hook for showing selected item
    const [selectedOption, setSelectedOption] = useState('');

    // Use another hook for storing option array
    const [optionArray, setOptionArray] = useState([]);

    // when we will hover the select button showing the list
    const handleMouseOver = () => {
        setOptionArray(list);
    }

    // When we click outside of that selected option
    const handleClick = () => {
        setOptionArray([])
    }

    // For selected item
    const handleOptionClick= (data) => {
        setSelectedOption(data);
    }

    return(
        <div onClick={handleClick}>
            <h1>Should we use Dropdown?</h1>
            <div>
                <h2>{selectedOption}</h2>
                <div onMouseOver={handleMouseOver} className={Style.initialOption}>Select</div>
                <div className={Style.options}>
                    {optionArray.map((data)=> (
                        <div onClick={() => handleOptionClick(data)} className={Style.singleOption}>{data}</div>
                     ))}
                </div>
            </div>
        </div>
    )
}

export default Dropdown;
