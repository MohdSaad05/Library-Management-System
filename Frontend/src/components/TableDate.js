import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import {issuedReqDeletedByAdmin} from "../actions/Issue_action"
import { useDispatch } from 'react-redux';


const TableDate = ({book,fetchDataAgaib}) => {
       
        var dateFrom ;
        var dayDiff ;
      
      if(book){
       
        var result = new Date(book.createdAt) ;
        result.setDate(result.getDate() + 7);
        dateFrom= result ;
    
        var today = moment(new Date());
        var end = moment(result); 
    var duration = moment.duration(today.diff(end));
    var days = duration.asDays();
    dayDiff = days
          
      }
      const dispatch = useDispatch();

     const clearIssuedBookqq =(bookId)=>{
        dispatch(issuedReqDeletedByAdmin(bookId))
        fetchDataAgaib()
     }

    return (
        <>
            <tr >
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
        <td>{<Moment format="YYYY-MM-DD">{book.createdAt }</Moment>}</td>
        <td>{<Moment format="YYYY-MM-DD">{dateFrom}</Moment>}</td>
        <td>{Math.floor(dayDiff) > 0 ?Math.floor(dayDiff) * 15 : 0 }</td>
        <td>
             
             <button onClick={() =>  clearIssuedBookqq(book._id)} className="btn btn-danger">Clear</button>
        </td>

    </tr>
        </>
    );
};

export default TableDate;