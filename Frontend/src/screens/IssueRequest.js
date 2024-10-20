import React,{useState,useEffect} from 'react';
import {getAllBookIssueReq ,issuedReq,issuedReqDeletedByAdmin} from "../actions/Issue_action"
import { useDispatch, useSelector } from 'react-redux'

const IssueRequest = () => {

    const dispatch = useDispatch() ;
    
    useEffect(()=> {
        dispatch(getAllBookIssueReq())
    },[])
   
   

    const {issuebooks} = useSelector(state => state.getAllIssueBookReqReducer)
    const newIssuedBook = issuebooks && issuebooks.filter(item => !item.isIssue && !item.isRecom)

    return (
        <div className="col-md-10 m-auto">
             <p style={{fontFamily:"sans-serif",fontSize:"30px",textAlign:"center",padding:"10px",marginTop:"20px"}}>Request for Book Issuance by Student</p>
            <table  className='table table-bordered table-responsive-sm'>


<thead className='thead-dark' style={{ background: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)", color: "black", border: "2px solid black" }}>
    <tr >
        <th>Book Name</th>
        <th>Author</th>
        <th>Student Name</th>
        <th>Student Branch</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody style={{border:"2px solid black"}}>
    
{newIssuedBook && newIssuedBook.map(book=>{

    return <tr key={book._id} >
        <td>{book.title}</td>
        <td>
            {book.author}
        </td>
        <td>
            {book.userName}
        </td>
        <td>
            {book.userBranch}
        </td>
       
        <td>
           
             <button onClick={() => dispatch(issuedReq(book._id,book.bookId))} className="btn btn-success" style={{marginBottom:"6px", backgroundColor:"grey"}}>Granted</button> { "  "}
             <button onClick={() => dispatch(issuedReqDeletedByAdmin(book._id))} className="btn btn-danger" style={{backgroundColor: "#FFC229"}}>Declined</button>
        </td>

    </tr>

})}
</tbody>

</table>
        </div>
    );
};

export default IssueRequest;