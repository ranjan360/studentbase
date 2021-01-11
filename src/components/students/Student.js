import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Avatar from './Avatar'
import {useFirestore} from 'react-redux-firebase'


const Student = () => {
    const firestore = useFirestore()
    const {id} = useParams()
    const [student, setStudent] = useState(null)

    useEffect(() => {
        loadStudent()
    }, []);
    
    const loadStudent = async () => {
        try{
            const docRef = firestore.collection("students").doc(id)
            const result = await docRef.get()
            if(result.exists){
                setStudent(result.data())
            }else{
                alert("No Such Documents")
            }
        }catch (err){
            console.log("err", err)
        }
    }

    if(!student){
        return <h2>Loading...</h2>
    }
    return (
        <div className="container">
            <div className="py-4">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="card card-body shadow">
                            <div className="row">
                                <div className="col-md-4">
                                <Avatar url={`https://i.pravatar.cc/150?img=${id}`} />
                                </div>
                                <div className="col-md-8">
                                    <ul className="list-group">
                                        <li className="d-flex justify-content-between align-items list-group-item">
                                            <h3 className="m-0">{student.name}</h3>
                                            <Link className="btn btn-danger" to={`/studentForm/${id}`}>Edit Profile</Link>
                                        </li>
                                        <li className="list-group-item">
                                            <p>email: {student.email}</p>
                                            <p>phone: {student.phone}</p>
                                            <p>class: {student.class}</p>
                                            <p>address1: {student.address1}</p>
                                            <p>adress2: {student.address2}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student