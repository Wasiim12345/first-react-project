import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {

    const Navigate = useNavigate();
    const { id } = useParams();
    console.log("id :", id);
    const [getData, setData] = useState({
        studentName: "",
        studentEmail: ""
    });

    useEffect(() => {
        async function fetchSpecificAPIData() {
            const getPostResult = await axios.get(`http://localhost:3333/studentDetails/${id}`);
            console.log("getPostResult :", getPostResult.data);
            setData(getPostResult.data)
        }
        fetchSpecificAPIData();
    }, [id]);

    function onChangeTextFunc(e) {
        // setData(e.target.value);
        setData({
            // [e.target.name] : e.target.value;
            // lets use the previous data
            ...getData,
            [e.target.name]: e.target.value
        })

        console.log(e.target.value);
        console.log("useState Data : ", getData);
    }

    async function onFormSubmitUpdate(e) {
        console.log("onFormSubmit");
        try {
            e.preventDefault();
            const getPostResult = await axios.put(`http://localhost:3333/studentDetails/${id}`, getData);  //using put method to update data
            console.log("getUpdateResult : ", getPostResult);
            //after saving data, we can write our condition to show message with useState hook
        } catch (error) {
            console.log(error);
        }
        Navigate("/list")
    }

    function handleClick() {
        Navigate("list");
    }

    return (
        <>
            <h2>Edit data page:</h2>
            <form>
                <input
                    type="text"
                    placeholder="Enter Name"
                    name="studentName"
                    value={getData.studentName}
                    onChange={(e) => onChangeTextFunc(e)}
                /><br /><br />
                <input
                    type="text"
                    placeholder="Enter Email"
                    name="studentEmail"
                    value={getData.studentEmail}
                    onChange={(e) => onChangeTextFunc(e)}
                /><br /><br />
                <button onClick={(e) => onFormSubmitUpdate(e)}>Update Data</button>
            </form>
            <button onClick={(e) => handleClick()}>Go to student list</button>
        </>
    )
}

export default Edit;