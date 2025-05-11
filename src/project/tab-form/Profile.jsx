import React from 'react'

function Profile({ data, setData, error }) {
    const { name, age, email } = data;
    const handleInputData = (e, item) => {
        setData((prevData) => ({
            ...prevData,
            [item]: e.target.value
        }))

    }

    return (
        <div>
            <div>
                <label >Name: </label>
                <input type="text" value={name} onChange={(e) => handleInputData(e, 'name')} />
                {error.name && <span className='err'>{error.name}</span>}
            </div>
            <div>
                <label >Age: </label>
                <input type="text" value={age} onChange={(e) => handleInputData(e, 'age')} />
                {error.age && <span className='err'>{error.age}</span>}
            </div>
            <div>
                <label >Email: </label>
                <input type="text" value={email} onChange={(e) => handleInputData(e, 'email')} />
                {error.email && <span className='err'>{error.email}</span>}
            </div>
        </div>
    )
}

export default Profile