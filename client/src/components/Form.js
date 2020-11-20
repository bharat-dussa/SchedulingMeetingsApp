import Datepicker from "../components/Datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import setSeconds from "date-fns/setSeconds";
import React from "react";
import axios from "axios";

// import setDate from 'date-fns/setDate'

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentname: " ",
      parentemail: " ",
      childname: " ",
      childage: " ",
      mobile: " ",
      coursename: " ",
      date: " ",
      sent: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  handleChange(e) {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
  }
  // handleDropdownChange(e) {
  //   this.setState({ selectValue: e.target.value });
  // }
  handleSubmit(event) {
    let data = {
      parentname: this.state.parentname,
      parentemail: this.state.parentemail,
      childname: this.state.childname,
      childage: this.state.childage,
      mobile: this.state.mobile,
      coursename: this.state.coursenaem,
      date: this.state.date,
    };
    // console.log(data.coursename);
    // alert(data.coursename);
    axios
      .post("/api/bookings", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("Message not Sent");
      });
  }

  // Resetting Forms
  resetForm = () => {
    this.setState({
      parentname: " ",
      parentemail: " ",
      childname: " ",
      childage: " ",
      mobile: " ",
      coursename: " ",
      date: " ",
    });
    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };

  render() {
    return (
      <div className="form-container">
        {" "}
        <form className="needs-validation" onSubmit={this.handleSubmit} novalidation>
          <div className="form-group row">
            <label
              for="inputEmail3"
              className="col-sm-2 mr-5 col-form-label label-left"
            >
              Parent's Email
            </label>
            <div className="col-sm-6">
              <input
                value={this.state.parentemail}
                onChange={this.handleChange}
                name="parentemail"
                type="email"
                className="form-control"
                id="validationTooltip01"
                required
                aria-describedby="emailHelp"
                placeholder="abc@xyz.com"
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              for="inputEmail3"
              className="col-sm-2 mr-5 col-form-label label-left"
            >
              Parent's Name
            </label>
            <div className="col-sm-6">
              <input
                value={this.state.parentname}
                onChange={this.handleChange}
                name="parentname"
                type="text"
                id="validationTooltip01"
                required
                className="form-control mb-2"
                placeholder="Parent Name"
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              for="inputEmail3"
              className="col-sm-2 mr-5 col-form-label label-left"
            >
              Child's name
            </label>
            <div className="col-sm-6">
              <input
                value={this.state.childname}
                onChange={this.handleChange}
                name="childname"
                type="text"
                data-validation="text"
                className="form-control mb-2"
                id="validationTooltip01"
                required
                placeholder="Child Name"
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              for="text"
              className="col-sm-2 mr-5 col-form-label label-left"
            >
              Child's Age
            </label>
            <div className="col-sm-6">
              <input
                value={this.state.childage}
                onChange={this.handleChange}
                name="childage"
                type="text"
                className="form-control mb-2"
                id="validationTooltip01"
                required
                placeholder="Ex:10"
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              for="inputEmail3"
              className="col-sm-2 mr-5 col-form-label label-left"
            >
              Mobile No.
            </label>
            <div className="col-sm-6">
              <input
                value={this.state.mobile}
                onChange={this.handleChange}
                name="mobile"
                type="text"
                data-validation="number"
                data-validation-allowing="negative,number"
                datavalidation-ignore="$"
                required="required"
                className="form-control"
                id="phone_no"
                placeholder="Phone Number"
              />{" "}
            </div>
          </div>

          <div className="form-inline row">
            <label
              className="col-sm-2 mr-5 col-form-label label-left"
              for="inlineFormCustomSelectPref"
              required="required"
            >
              Course Name
            </label>

            <select
              // value={this.state.coursename}
              onChange={(e) => this.setState({coursenaem: e.target.value})}
              name="options"
              className="custom-select my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              required="required"
            >
              <option selected>Choose...</option>
              <option>Scratch Junior</option>
              <option>Game Development</option>
              <option>Data Science</option>
              <option>Web Development</option>
              <option>Python</option>
              <option>IOS Developement</option>
            </select>
            {/* <p>{this.state.coursenaem}</p> */}
            <label className="col-sm-2 ml-5 col-form-label label-left">
              Pick Date and Time
            </label>

            <Datepicker
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary mt-5">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default Forms;
