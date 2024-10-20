import React,{useEffect,useState} from 'react';
import {getAllIssuedBook,filterallIssuedBook} from "../actions/Issue_action"
import { useDispatch, useSelector } from 'react-redux'

import TableDate from "../components/TableDate"

const AllIssuedBook = () => {
    const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(getAllIssuedBook())
      },[])
   
      const [searchKey,setSearchKey] = useState("")
      
    const {all_IssuedBook} = useSelector(state => state.allIssuedBookReducer)
 
     
   
    const fetchDataAgaib = ()=>{
        dispatch(getAllIssuedBook())
    }
  
 

    return (
        <div className="col-md-10 m-auto pt-4">
            <h4 style={{textAlign:"center",fontFamily: "Nunito",
            fontSize: "30px"}}> List of All Issued Books</h4>

            <br />
          <table  className='table table-bordered table-responsive-sm'>

<thead className='thead-dark bg-info' style={{ background: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)", color: "black", border: "2px solid black" }}>
    <tr>
        <th>Book</th>
        <th>Author</th>
        <th>Name</th>
        <th>Branch</th>
        <th>Issued Date</th>
        <th>Return Date</th>
        <th>Dues</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody style={{border:"black"}}>
    
{all_IssuedBook && all_IssuedBook.map(book=>{
     
     return <TableDate key={book._id} book={book} fetchDataAgaib={fetchDataAgaib} />

})}

</tbody>

</table>
      
  
        </div>
    );
};

export default AllIssuedBook;
