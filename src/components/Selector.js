import React from 'react'

export default function Selector(props) {
    const options=[
        { value: 2459115, label: 'New York' },
        { value: 2442047, label: 'Los Angeles' },
        { value: 610264, label: 'Marseille' },
        { value: 753692, label: 'Barcelona' },
        { value: 721943, label: 'Rome' }
    ]
    const getValue=(e)=>{
        props.getLocation({value:e.target.value, label:e.target.label})
    }
    return (
        <>
           <select onChange={getValue}>
           {options.map(c=>{      
               return  <option key={c.value} value={c.value}>{c.label}</option>
           })}
            </select> 
        </>
    )

}
