import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchPagination = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [show,setShow] = useState(false)
  const [dialogData,setDialogData] = useState({})

  const [currentPage,setCurrentPage] = useState(1);
  const pages = 3;

  useEffect(() => {
    const handleApi = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(res?.data);
      setSearchData(res?.data); // Initialize searchData with all data
    };
    handleApi();
  }, []);
  const lastIndexOfPage = currentPage * pages;
  const firstIndexOfPage = lastIndexOfPage - pages
  const displayData = searchData.slice(firstIndexOfPage,lastIndexOfPage)
  const totalPages = Math.ceil(data.length / pages)

  const nextPage =()=>{
    if(totalPages > currentPage) setCurrentPage(currentPage +1);
  }
  const prevPage =()=>{
    if(currentPage  > 1) setCurrentPage(currentPage -1)
  }

  const handleSearchData = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term === '') {
      setSearchData(data);
    } else {
      const filteredData = data.filter(item => 
        item.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchData(filteredData);
    }
  };

  return (
    <div>
      <div>
        <input 
          type="search" 
          value={searchTerm}
          onChange={handleSearchData} 
          placeholder="Search by name..."
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <button onClick={(e)=>{
                  setShow(!show)
                  setDialogData(item)
                }}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          {show && <div style={{height:"400px",width:"400px",backgroundColor:"red"}}>
            <h1>Detail Page</h1>
          <p>{dialogData?.id}</p>
          </div>}
      <div>
        <button onClick={nextPage}>Nex</button>
        <p>{currentPage}</p>
        <button onClick={prevPage}>prev</button>
      </div>
    </div>
  );
};

export default SearchPagination;