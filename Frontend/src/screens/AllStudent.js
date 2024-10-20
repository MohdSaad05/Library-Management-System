import React,{useState,useEffect} from 'react';
import {getAllStudent,removeAStudent} from "../actions/user_action"
import { useDispatch, useSelector } from 'react-redux'

const AllStudent = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getAllStudent())
    },[])
   const {students} = useSelector(state => state.getAllStudentReducer)
   const filterStudent = students && students.filter(item => !item.isAdmin)
    return (
        <div className="col-md-10 m-auto">
            <h3 style={{textAlign:"center",
            fontFamily: "Nunito",
            fontSize: "25px", marginTop:"50px"}}>Handle Student Records</h3>
            <table  className='table table-bordered table-responsive-sm'>

<thead style={{ background: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)", color: "black", border: "2px solid black" }}>
    <tr>
    <th>Record No.</th>
        <th>Name</th>
        <th>Academic ID</th>
        <th>Branch</th>
        <th>Join year</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody style={{border: "2px solid black" }}>
{filterStudent && filterStudent.map((student,index)=>{

    return <tr key={student._id}>
           <td>{index+1}</td>
        <td>{student.name}</td>
        <td>
            {student.roll_no}
        </td>
        <td>{student.branch}</td>
        <td>{student.addmission_year}</td>
        <td>
            {/* <i className='fa fa-trash m-1' onClick={()=> console.log("okk")}></i> */}
            <button className="btn btn-danger" style={{
                                            backgroundColor: "grey",border: "none" }} onClick={() => dispatch(removeAStudent(student._id))}>Delete</button>
        </td>

    </tr>

})}
</tbody>

</table>
        </div>
    );
};

export default AllStudent;