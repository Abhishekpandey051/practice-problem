import React from 'react'

function Setting({ data, setData }) {
    const { theme } = data;
    const handleThemeChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            theme: e.target.name

        }))
    }
    return (
        <div>
            <div>
                <label >
                    <input type="radio" name='dark' checked={theme === 'dark'} onChange={handleThemeChange} />
                    Dark
                </label>
            </div>
            <div>
                <label >
                    <input type="radio" name='light' checked={theme === 'light'} onChange={handleThemeChange} />
                    Light
                </label>
            </div>
        </div>
    )
}

export default Setting