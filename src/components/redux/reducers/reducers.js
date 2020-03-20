/** @format */

import {
  ADD_TEACHER_SUBJECT,
  ADD_CLASS_SECTION,
  FILTER_TEACHERS,
  DELETE_DATA
} from "../action/actionTypes";

const initialState = {
  classes: [
    {
      std: "Class 1",
      sections: ["A", "B"]
    },
    {
      std: "Class 2",
      sections: ["A", "B", "C"]
    },
    {
      std: "Class 3",
      sections: ["A"]
    }
  ],
  teachers: [
    {
      id: 1,
      teacherName: "Nrupul",
      subject: "Science",
      sectionSelected: "A",
      classSelected: "Class 1"
    },
    {
      id: 2,
      teacherName: "Albert",
      subject: "Science",
      sectionSelected: "A",
      classSelected: "Class 1"
    }
  ],
  temp: []
};

const teachersReducers = (state = initialState, action) => {
  let id = 2;
  switch (action.type) {
    case ADD_TEACHER_SUBJECT:
      id++;
      return {
        ...state,
        teachers: [...state.teachers, { ...action.payload, id: id }]
      };
    case ADD_CLASS_SECTION:
      let arr = state.classes;
      let data = action.payload;
      let sectionAdded = false;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].std == data.std) {
          arr[i].sections.push(data.section);
          sectionAdded = true;
        }
      }
      if (sectionAdded == false) {
        arr.push({ std: data.std, sections: [data.section] });
      }

      return {
        ...state,
        classes: [...state.classes]
      };
    case FILTER_TEACHERS:
      let arr1 = state.teachers;
      let tempData = [];
      console.log(action.payload);
      if (action.payload == "all") {
        tempData = [...arr1];
      } else {
        tempData = arr1.filter(ele => {
          return ele.classSelected == action.payload;
        });
      }
      console.log(tempData);
      return {
        ...state,
        temp: [...tempData]
      };
    case DELETE_DATA:
      let arr2 = state.teachers;
      let updatedData = arr2.filter(ele => {
        return ele.id !== action.payload;
      });
      console.log(updatedData)
      return {
        ...state,
        teachers: [...updatedData],
        temp: [...updatedData]
      };
    default: {
      return state;
    }
  }
};

export default teachersReducers;
