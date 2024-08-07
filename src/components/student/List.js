import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
    const [data, setData] = useState([]);

    function getAPIData(){
        try{
            axios.get("http://localhost:3333/studentDetails").then
            ((getData) => {
                console.log(getData.data);
                setData(getData)
            })
        } 
        catch(error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAPIData()
    }, [])

    const handleDelete = async(getId) => {
        console.log(getId)
        const getResult = await axios.delete(`http://localhost:3333/studentDetails/${getId}`)
        console.log("getResult : ", getResult)
        getAPIData()
    }

    return(
        <>
            <h2>Welcome to List page</h2>
            <table border="1px">
                <tr style={{ background: "#3d5bff" }}>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th colSpan={3}>Action</th>
                </tr>
                {
                    data?.map((itemList, itemIndex) => {
                        return <>
                            <tr key={itemIndex}>
                                <td>{itemList.id}</td>
                                <td>{itemList.studentName}</td>
                                <td>{itemList.studentEmail}</td>
                                <td>
                                    <Link to={`/view/${itemList.id}`}>View</Link>
                                </td>
                                <td>
                                    <Link to={`/edit/${itemList.id}`}>Edit</Link>
                                </td>
                                <td>
                                    <button onClick={(e)=> handleDelete(itemList.id)}>Delete</button>
                                </td>
                            </tr>
                        </>
                    })
                }
            </table>
        </>
    )
}

export default List;