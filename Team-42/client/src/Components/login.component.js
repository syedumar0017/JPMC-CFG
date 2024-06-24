import React, { Component, useState } from 'react'
import axios from '../../node_modules/axios'

const [phoneNo, setphoneNo] = useState("");
const [password, setpassword] = useState("");

function setphoneNos(evt) {
  setphoneNo(evt.target.value);
}

function setpasswords(evt) {
  setpassword(evt.target.value);
}

const login = async () => {

  await axios.get("http://localhost:5000/login", {
    params: {
      phoneNo: phoneNo,
      password: password
    }
  })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
}
export default class Login extends Component {
  render() {
    return (
      <form onSubmit={login}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter phone number"
            onChange={setphoneNos}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={setpasswords}
          />
        </div>

        {/* <div className="mb-3">
          <label>Role</label>
          <br/>
  <select name="roles" id="roles">    
  <option value="-1">Select</option>
  <option value="farmer">Farmer</option>
  <option value="cpu">Central Procurement Unit</option>
  <option value="mfp">Micro Food Procurement</option>
</select>
        </div> */}

        <div className="mb-3">
          <div className="custom-control custom-checkbox">

            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>


        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="#">Forgot password?</a>
        </p>
      </form>
    )
  }
}



