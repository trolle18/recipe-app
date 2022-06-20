import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    // Handles searches  - renders on SearchedPage
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)

    };

    return (
        <form className="searchbar-cntr" onSubmit={handleSubmit}>
            <div className="searchbar">
                <FaSearch/>
                <input type="text" value={input} 
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </form>
    )
};