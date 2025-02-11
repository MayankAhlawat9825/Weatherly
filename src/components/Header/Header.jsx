import React, { useState } from 'react';
import Logo from '../Logo';
import { useDispatch } from 'react-redux';
import { getData } from '../../redux/Slices/weatherdata'; // ✅ Import getData

function Header() {
    const [Search, setSearch] = useState('');
    const [Theme, setTheme] = useState('light');
    const dispatch = useDispatch();

    const ToggleTheme = () => {
        const newTheme = Theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const SendData = (e) => {
        e.preventDefault();
        if (Search.trim()) { // ✅ Prevents empty searches
            dispatch(getData(Search)); // ✅ Send an object with `data` key
            setSearch('');
        }
    };

    return (
        <div>
            <div className='flex flex-wrap justify-between'>
                <div>
                    <Logo />
                    <h3>WeatherApp</h3>
                </div>
                <div className='w-1/3'>
                    <form onSubmit={SendData}>
                        <div>
                            <label className='mx-3'></label>
                            <input
                                type="text" // ✅ Fixed typo
                                placeholder='Search By City'
                                value={Search}
                                onChange={(e) => setSearch(e.target.value)}
                                className='px-3 py-2 rounded-lg bg-gray-200 text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-3/4'
                            />
                            <button
                                type='submit'
                                className="border-0 py-2 px-6 focus:outline-none hover:bg-indigo-300 rounded text-lg">
                                🔍
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <button type='button' onClick={ToggleTheme} className="text-3xl ">
                        {Theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
