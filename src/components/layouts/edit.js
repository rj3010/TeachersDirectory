/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import {editTeachersData} from '../redux/action';

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classSelected: "",
      sectionSelected: "",
      teacherName:"",
      subjectName:""
    };
  }
  componentDidMount = () => {
      const {teachersData, match} = this.props;
    let particularTeacher = teachersData.filter(ele => {
        return ele.id == match.params.id;
      });
      this.setState({
        teacherName: particularTeacher[0].teacherName,
        subjectName: particularTeacher[0].subject,
        classSelected: particularTeacher[0].classSelected,
        sectionSelected: particularTeacher[0].sectionSelected

      })
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {  classes } = this.props;
    const { classSelected, teacherName, subjectName,sectionSelected } = this.state;
   
    let classOption = classes.map(ele => {
      return (
        <option key={ele.std} value={ele.std}>
          {ele.std}
        </option>
      );
    });
    let sectionOption = [];
    classes.map(ele => {
      if (ele.std == classSelected) {
        sectionOption = ele.sections.map(ele => {
          return <option value={ele} key={ele}>Section - {ele}</option>;
        });
      }
    });

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-11 col-md-5 col-lg-5">
            <div className="form-group">
              <h3 className="text-primary">Edit Teacher's Information</h3>
              <label htmlFor="#teacherName">Add Teacher Name </label>
              <input
                type="text"
                id="teacherName"
                name="teacherName"
                className="form-control"
                value={teacherName}
                onChange={this.handleChange}
              />
              <label htmlFor="#subject">Add Subject </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                value={subjectName}
                onChange={this.handleChange}
              />
              <div className="form-group">
                <label htmlFor="#classSelected">Class</label>
                <select
                  id="classSelected"
                  name="classSelected"
                  className="form-control"
                  value={classSelected}
                  onChange={this.handleChange}
                >
                  <option key={1} >Choose</option>

                  {classOption.map(ele => {
                    return ele;
                  })}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="#sectionSelected">Section</label>
                <select
                  id="sectionSelected"
                  name="sectionSelected"
                  className="form-control"
                  value={sectionSelected}
                  onChange={this.handleChange}
                >
                  <option key={1}>Choose</option>

                  {sectionOption.map(ele => {
                    return ele;
                  })}
                </select>
              </div>
              <button
                type="button"
                className="btn btn-primary col-sm-12 my-1"
                onClick={this.addTeacher}
              >
                Edit
              </button>
              <Link
                to="/home/"
                className="btn btn-warning col-sm-12 flaot-right"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teachersData: state.teachersReducers.teachers,
    classes: state.teachersReducers.classes
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
