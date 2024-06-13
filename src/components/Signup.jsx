import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    const[data,setData]=useState(
        {
             "name":"",
             "email":"",
             "password":"",
             "cnfp":""
        }
    )
    const inputHandler=(events)=>
        {
            setData({...data,[events.target.name]:events.target.value})
        }
        const readValue=()=>
            {
                console.log(data)
                axios.post("http://localhost:8082/signup",data).then(
                    (response)=>
                        {
                            console.log(response.data)
                            if(response.data.status=="success")
                                {
                                    alert("success")
                                }
                            else{
                                alert("error")
                            }

                        }
                ).catch()
            }
  return (
    <div>
        <h1><center><u>SIGNUP HERE</u></center></h1>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12">
                    <label htmlFor="" className="form-label">User Name</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12">
                <label htmlFor="" className="form-label">Email Id</label>
                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12">
                <label htmlFor="" className="form-label">Confirm Password</label>
                <input type="password" name="cnfp" id="" className="form-control" value={data.cnfp} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                    <button className="btn btn-success" onClick={readValue}>submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup