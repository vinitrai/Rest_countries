
export default function Dropdown({handleSelect}){
    const regions =['Africa','America','Asia','Europe','Oceania']
    return(
    <div className="dropdown">
        <select className="dropdown--select" onChange={(e)=>handleSelect(e.target.value)}>

         <option value="">Filter By Region </option>
         {
            regions.map(region =><option 
                key={region} 
                value={region}>{region}</option>)
         }
        </select> 
    
    </div>
    
)
}