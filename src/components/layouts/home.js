/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addClasses,
  addTeachers,
  filterTeachers,
  deleteData
} from "../redux/action/actions";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      std: "",
      section: "",
      teacherName: "",
      subject: "",
      sectionSelected: "",
      classSelected: "",
      filterSelected: "all",
      tempData: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount = () => {
    const { teachers } = this.props;
    this.setState({
      tempData: [...teachers]
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChange1 = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      async () => {
        const { filterTeachers } = this.props;
        const { filterSelected } = this.state;
        await filterTeachers(filterSelected);
        const { temp } = this.props;
        this.setState({
          tempData: [...temp]
        });
      }
    );
  };
  handleDelete = async id => {
    const { deleteData } = this.props;
    await deleteData(id);
    const { temp } = this.props;
    this.setState({
      tempData: [...temp]
    });
  };
  addClass = () => {
    const { std, section } = this.state;
    const { addClasses } = this.props;
    addClasses({ std, section });
  };

  addTeacher = async () => {
    const {
      classSelected,
      sectionSelected,
      teacherName,
      subject,
      filterSelected
    } = this.state;
    const { addTeachers, filterTeachers } = this.props;
    await addTeachers({ classSelected, sectionSelected, teacherName, subject });
    console.log(filterSelected)
    filterTeachers(filterSelected);
    const { temp } = this.props;
    this.setState({
      tempData: [...temp]
    });
  };

  render() {
    const { classSelected, tempData } = this.state;
    const { classes } = this.props;
    let teachersData = [...tempData];
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

    let idGen = 0;

    return (
      <>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-11 col-md-3 col-lg-3 ">
            <div className="form-group">
              <h3 className=" text-primary">Filter By Class</h3>
              <label htmlFor="#filter">Select Class</label>
              <select
                id="filter"
                name="filterSelected"
                className="form-control"
                onChange={this.handleChange1}
              >
                <option value="all">All</option>
                {classOption.map(ele => {
                  return ele;
                })}
              </select>
            </div>
          </div>
          <div className="col-sm-11 col-md-3 col-lg-3 mx-1">
            <div className="form-group">
              <h3 className="text-primary">Add Teacher / Subject</h3>
              <label htmlFor="#teacherName">Add Teacher Name </label>
              <input
                type="text"
                id="teacherName"
                name="teacherName"
                className="form-control"
                placeholder="Enter Teacher's Name"
                onChange={this.handleChange}
              />
              <label htmlFor="#subject">Add Subject </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                placeholder="Enter Subject Name"
                onChange={this.handleChange}
              />
              <div className="form-group">
                <label htmlFor="#classSelected">Class</label>
                <select
                  id="classSelected"
                  name="classSelected"
                  className="form-control"
                  onChange={this.handleChange}
                >
                  <option value="">Choose</option>

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
                  onChange={this.handleChange}
                >
                  <option value="">Choose</option>

                  {sectionOption.map(ele => {
                    return ele;
                  })}
                </select>
              </div>
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={this.addTeacher}
              >
                Add Teacher/Subject
              </button>
            </div>
          </div>
          <div className="col-sm-11 col-md-3 col-lg-3">
            <div className="form-group">
              <h3 className="text-primary">Add Class / Section</h3>

              <label htmlFor="#std">Add class </label>
              <input
                type="text"
                id="std"
                name="std"
                placeholder="Example - Class 4"
                className="form-control"
                onChange={this.handleChange}
              />
              <label htmlFor="#section">Add Section </label>
              <input
                type="text"
                id="section"
                name="section"
                placeholder="Example - A"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary py-2 w-100"
              onClick={this.addClass}
            >
              Add Class/Section
            </button>
          </div>
        </div>
        <div className="table-responsive-lg">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  #
                </th>
                <th scope="col" className="text-center">
                  Name
                </th>
                <th scope="col" className="text-center">
                  Class
                </th>
                <th scope="col" className="text-center">
                  Section
                </th>
                <th scope="col" className="text-center">
                  Subject
                </th>
                <th scope="col" className="text-center">
                  Edit
                </th>
                <th scope="col" className="text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {teachersData.map(ele => {
                idGen += 1;
                return (
                  <tr key={idGen}>
                    <td className="text-center">{idGen}</td>
                    <td className="text-center">{ele.teacherName}</td>
                    <td className="text-center">{ele.classSelected}</td>
                    <td className="text-center">{ele.sectionSelected}</td>
                    <td className="text-center">{ele.subject}</td>
                    <td className="text-center">
                      <Link
                        to={`/home/edit/${ele.id}`}
                        className="btn btn-primary"
                      >
                        Edit
                      </Link>
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(ele.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    teachers: state.teachersReducers.teachers,
    classes: state.teachersReducers.classes,
    temp: state.teachersReducers.temp
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addClasses: payload => dispatch(addClasses(payload)),
    addTeachers: payload => dispatch(addTeachers(payload)),
    filterTeachers: payload => dispatch(filterTeachers(payload)),
    deleteData: payload => dispatch(deleteData(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
