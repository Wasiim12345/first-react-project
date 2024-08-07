import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function View() {

    const [details, setDetails] = useState([]);
    // const paramsData = useParams();
    // console.log("paramsData : ", paramsData);

    const{id} = useParams();    //destructuring is happening here...
    const navigate = useNavigate();
    console.log(id);

    async function getStudentDetails() {
        try{
            const getStudentRecord = await axios.get(`http://localhost:3333/studentDetails/${id}`);

            console.log("getStudentRecord : ", getStudentRecord.data);
            setDetails(getStudentRecord.data)
        } catch(error) {
            console.log("show error :", error);
        }
    }

    useEffect(() => {
        getStudentDetails()
    }, [])

    function handleClick() {
        navigate("/list")
    }

    return(
        <>
            <h2>Data view page :</h2>
            <button onClick={()=>handleClick()}>Go to Student List</button>
            <table border="1px">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {
                    <tr>
                        <>
                            <td>{details.id}</td>
                            <td>{details.studentName}</td>
                            <td>{details.studentEmail}</td>
                        </>
                    </tr>
                }
            </table>
        </>
    )
}

export default View;