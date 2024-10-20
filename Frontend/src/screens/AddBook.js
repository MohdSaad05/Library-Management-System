import React, { useState } from "react";
import {addOneBook} from "../actions/book_action"
import { useDispatch } from 'react-redux'
import {Toast} from "react-bootstrap"

const AddBook = () => {
    const[title,setTitle] = useState("")
    const[author,setAuthor] = useState("")
    const[publisher,setPublisher] = useState("")
    const[year,setYear] = useState("")
    const[copies,setCopies] = useState("")
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()

      const PostData = () => {
        const book = { title,author,publisher,year,copies };
        
        dispatch(addOneBook(book));
        setShow(true)
        setTitle("")
        setAuthor("")
        setPublisher("")
        setCopies("")
        setYear("")
    };
    return (
        <div  className=" mt-5">
             

             <div className="card col-md-6 m-auto p-3" style={{ backgroundColor: "#d3e4e8", }}>
             <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                 <Toast.Body style={{backgroundColor:"green",color:"white",fontSize:"18px"}}>One Book Added</Toast.Body>
              </Toast>
                   <h2 style={{textAlign:"center",marginBottom:"20px",fontFamily: "Nunito",
            fontSize: "40px"}}>Register New Book</h2>
                    <div className="mb-3">
                        <input type="text" placeholder="Book Name" style={{height:"60px"}}
                         onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="Writer" value={author}  style={{height:"60px"}}
                        onChange={(e) => setAuthor(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                        <input type="text" placeholder="Publisher" value={publisher}  style={{height:"60px"}}
                        onChange={(e) => setPublisher(e.target.value)} className="form-control" />
                    </div>
                
                    <div className="mb-2">
                        <input type="text"
                         placeholder=" Available Copies"  style={{height:"60px"}}
                         value={copies} onChange={(e) => setCopies(e.target.value)} className="form-control" />
                    </div>
                   


                    <button className="btn btn-primary " onClick={() => PostData()}>
                    Register New Book
                    </button>

                </div>
        </div>
    );
};

export default AddBook;