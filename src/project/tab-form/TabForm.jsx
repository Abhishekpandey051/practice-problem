import React, { useState } from 'react'
import Profile from './Profile'
import Interest from './Interest'
import Setting from './Setting'
import "./tab-style.css"

function TabForm() {
    let [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState({
        name: 'Mahesh',
        age: 25,
        email: 'mahe@gmail.com',
        interest: ["cricket", "coding"],
        theme: 'dark',
    })


    const [error, setError] = useState({})
    const [displayData, setDisplayData] = useState();

    const tabs = [
        {
            id: 1,
            name: "Profile",
            component: Profile,
            validate: () => {
                const err = {}
                if (!data.name || data.name.length < 2) {
                    err.name = "name is not valid"
                }
                if (!data.age || data.age < 18) {
                    err.age = "age is not valid"
                }
                if (!data.email || data.email.length < 2) {
                    err.email = "email is not valid"
                }
                setError(err)
                return err.name || err.age || err.email ? false : true

            }
        },
        {
            id: 2,
            name: "Interest",
            component: Interest,
            validate: () => {
                const err = {}
                if (data.interest.length < 1) {
                    err.interest = "Select atleast one interest"
                }
                setError(err);
                return err.interest ? false : true
            }
        },
        {
            id: 3,
            name: "Setting",
            component: Setting,
            validate: () => {
                return true
            }
        }
    ]

    const ActiveComponent = tabs[activeTab].component

    const handleNextBtn = () => {
        if (tabs[activeTab].validate()) {
            setActiveTab((prev) => prev + 1)
        }
    }
    const handlePrevBtn = () => {
        if (tabs[activeTab].validate()) {
            setActiveTab((prev) => prev - 1)
        }
    }
    const handleSubmit = () => {
        setDisplayData(data)
    }

    return (
        <div className='head'>
            <div className='header-container'>
                {tabs.map((tab, index) => (
                    <div className='header' key={index} onClick={() => tabs[activeTab].validate() && setActiveTab(index)} >
                        {tab?.name}
                    </div>
                ))}
            </div>
            <div className='tab-info'>
                <ActiveComponent data={data} setData={setData} error={error} />
            </div>
            <div className='btn'>
                {activeTab > 0 && <button onClick={handlePrevBtn}>Prev</button>}
                {activeTab < tabs.length - 1 && <button onClick={handleNextBtn}>Next</button>}
                {activeTab === tabs.length - 1 && <button onClick={handleSubmit}>Submit now</button>}
            </div>
            {displayData && <div>
                <h1 style={{ textAlign: 'center' }}>Tab form data</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Interest</th>
                            <th>Theme</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{displayData.name}</td>
                            <td>{displayData.age}</td>
                            <td>{displayData.email}</td>
                            <td>{displayData.interest?.join(', ')}</td>
                            <td>{displayData.theme}</td>
                        </tr>
                    </tbody>
                </table>
            </div>}
        </div>
    )
}

export default TabForm