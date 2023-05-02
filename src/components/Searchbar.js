import { FaSearch } from 'react-icons/fa';

export default function Searchbar({handleSearch}){
    return (
        <div className = "search" >
    
        <FaSearch style={{ marginRight: "5px" }} />
        <input 
        className='search--input'
        type="search" 
        placeholder="Search..." 
        onChange={(e)=>handleSearch(e.target.value)}
        style={{border:0}}
        />
      </div>
    )
}