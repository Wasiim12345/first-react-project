import axios from "axios";
import { useState } from "react";

function AddNew() {

    const [getData, setData] = useState({
        studentName: "",
        studentEmail: ""
    });

    function onChangeTextFunc(e) {
        console.log("show data : ", e.target.value);
        // setData(e.target.valuue)
        setData({
            // [e.target.name] : e.target.value
            // now use with the previous data:--
            ...getData,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
        console.log("useState Data :", getData);
    }

    async function onFormSubmit(e) {
        console.log("onFormSubmit");
        e.preventDefault();
        try {
            const getPostResult = await axios.post("http://localhost:3333/studentDetails", getData)
            console.log("getPostResult :", getPostResult);
            // after saving data, we can write our conditions for show message with useState hook(set true / false)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div>Add data to new page</div>
            <form>
                <input
                    type="text"
                    placeholder="Enter Name"
                    name="studentName"
                    onChange={(e) => onChangeTextFunc(e)}
                /><br /><br />
                <input
                    type="text"
                    placeholder="Enter email"
                    name="studentEmail"
                    onChange={(e) => onChangeTextFunc(e)}
                /><br /><br />
                <button onClick={(e) => onFormSubmit(e)}>Add Data</button>
            </form>
        </>
    )
}

export default AddNew;