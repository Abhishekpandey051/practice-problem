import React from 'react'

function Interest({ data, setData,error }) {
    const { interest } = data;
    const handleInteresst = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setData((prevData) => ({
                ...prevData,
                interest: [...interest, name]
            }))
        } else {
            setData((prevData) => ({
                ...prevData,
                interest: interest.filter((item) => item !== name)
            }))
        }

    }

    // const handleInteresst =(e) =>{
    //     setData((prevData)=>({
    //         ...prevData,
    //         interest:e.target.checked ? [...prevData.interest,e.target.name] : prevData.interest.filter((t)=>t!==e.target.name)
    //     }))
    // }
    return (
        <div>
            <div>
                <label htmlFor="">
                    <input type="checkbox" name='cricket' checked={interest.includes("cricket")} onChange={handleInteresst} />
                    Cricke
                </label>
            </div>
            <div>
                <label htmlFor="">
                    <input type="checkbox" name='coding' checked={interest.includes("coding")} onChange={handleInteresst} />
                    Coding
                </label>
            </div>
            <div>
                <label htmlFor="">
                    <input type="checkbox" name='reading' checked={interest.includes("reading")} onChange={handleInteresst} />
                    Reading
                </label>
            </div>
            {error.interest && <span className='err'>{error.interest}</span>}
        </div>
    )
}

export default Interest