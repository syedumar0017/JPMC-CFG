import React, { Component, useState } from 'react'
import axios from '../../node_modules/axios'

const [firstName, setname] = useState("");
const [lastName, setsurname] = useState("");
const [phoneNo, setphoneNo] = useState("");
const [password, setpassword] = useState("");
//const [repassword, setrepassword] = useState("");
const [role, setrole] = useState("");

function setnames(evt) {
  setname(evt.target.value);
}
function setsurnames(evt) {
  setsurname(evt.target.value);
}
function setusernames(evt) {
  setphoneNo(evt.target.value);
}
function setpasswords(evt) {
  setpassword(evt.target.value);
}
function setroles(evt) {
  setrole(evt.target.value);
}

const register = async () => {

  await axios.get("http://localhost:5000/register", {
    params: {
      firstName: firstName,
      lastName: lastName,
      phoneNo: phoneNo,
      password: password,
      role: role,
    }
  })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
}
export default class SignUp extends Component {
  render() {
    return (
      <form onSubmit={register}>
        <h3>Register</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onchange={setnames}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" onchange={setsurnames} />
        </div >
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter phone number"
            onchange={setusernames}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onchange={setpasswords}
          />
        </div>
        <div className="mb-3">
          <label>Role</label>
          <br />
          <select name="roles" id="roles" onchange={setroles}>
            <option value="-1">Select</option>
            <option value="farmer">Farmer</option>
            <option value="cpu">Central Procurement Unit</option>
            <option value="mfp">Micro Food Procurement</option>
          </select>
        </div>
        <div className="d-grid">
          <button type="attach" className="btn btn-primary">
            Register </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form >
    )
  }
}

