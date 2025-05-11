import React, { useState } from 'react'

function ChipsInput() {
    const [enterText, setEnterText] = useState("");
    const [chips, setChips] = useState([]);

    const handleText = (index) => {
       const copyChips = [...chips]
       copyChips.splice(index, 1);
       setChips(copyChips)
    }

    const addTextbyEnterkey = (e) => {
        if(e.key === "Enter" && enterText.trim() !== ""){
            setChips(prevData=> [...prevData,enterText])
            setEnterText("")
        }
    }
// console.log(chips);

    
    setEnterText
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h1>Chips Input</h1>
                <input type="text" style={{ padding: '6px', borderRadius: '5px' }} placeholder='Enter text here' value={enterText}
                onChange={(e)=>setEnterText(e.target.value)}
                    onKeyDown={(e) => addTextbyEnterkey(e)}/>
                <div style={{ marginTop: '20px' }}>
                    {
                        chips?.map((eachChip,index) => 
                            <span style={{ border: '1px', background: 'gray', borderRadius: '8px', padding: '7px', color: 'white' }}
                            onClick={()=>handleText(index)}>{eachChip}<button style={{background:'gray', marginLeft:'5px'}}>x</button>
                        </span> 
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ChipsInput