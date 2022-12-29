import React from 'react'
import Success from './Success'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './Form.css'

export default function Form() {
    let [usn, setUsn] = useState("");
    let [name, setName] = useState("");
    let [age, setAge] = useState(null);
    let [cgpa, setCgpa] = useState(null);
    let [add, setAdd] = useState("");

    let handleSubmit = (e) =>{
        e.preventDefault();
        const root = ReactDOM.createRoot(document.getElementById('root'))
        root.render(
            <React.StrictMode>
                <Success usn={usn} name={name} age={age} cgpa={cgpa} add={add} />
            </React.StrictMode> 
        );
    }

    return(
        <div className='main'>
            <div className='head'>Student Registration</div>
            <form onSubmit={handleSubmit} className='form'>
                <div className='input'>
                    <div id='cell'>USN</div>
                    <div id='cellb'>
                        <input
                            type="text"
                            required
                            placeholder='Enter USN'
                            pattern='[0-9]{1}RV[0-9]{2}MC[0-9]{3}'
                            onChange={(e) =>{
                                setUsn(e.target.value)
                            }}
                        ></input>
                    </div>
                </div>  
                <div className='input'>
                    <div id='cell'>NAME</div>
                    <div id='cellb'>
                        <input
                            type="text"
                            required
                            placeholder='Enter Name'
                            maxLength={10}
                            onChange={(e) =>{
                                setName(e.target.value)
                            }}
                        ></input>
                    </div>
                </div>  
                <div className='input'>
                    <div id='cell'>AGE</div>
                    <div id='cellb'>
                        <input
                            type="number"
                            required
                            placeholder='Enter Age'
                            min={18}
                            max={25}
                            onChange={(e) =>{
                                setAge(e.target.value)
                            }}
                        ></input>
                    </div>
                </div>  
                <div className='input'>
                    <div id='cell'>CGPA</div>
                    <div id='cellb'>
                        <input
                            type="number"
                            required
                            placeholder='Enter CGPA'
                            min={0}
                            max={10}
                            onChange={(e) =>{
                                setCgpa(e.target.value)
                            }}
                        ></input>
                    </div>
                </div>  
                <div className='input'>
                    <div id='cell'>ADDRESS</div>
                    <div id='cellb'>
                        <input
                            type="text"
                            required
                            placeholder='Enter Address'
                            maxLength={15}
                            onChange={(e) =>{
                                setAdd(e.target.value)
                            }}
                        ></input>
                    </div>
                </div>  
                <div id='btnsub'>
                    <input type="submit" value="REGISTRATION"></input>
                </div>          
            </form>
        </div>
    );
};
