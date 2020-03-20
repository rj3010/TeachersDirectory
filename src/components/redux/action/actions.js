/** @format */

import {
  ADD_TEACHER_SUBJECT,
  ADD_CLASS_SECTION,
  FILTER_TEACHERS,
  DELETE_DATA
} from "./actionTypes";

export const addTeachers = payload => ({
  type: ADD_TEACHER_SUBJECT,
  payload
});

export const addClasses = payload => ({
  type: ADD_CLASS_SECTION,
  payload
});

export const filterTeachers = payload => ({
  type: FILTER_TEACHERS,
  payload
});

export const deleteData = payload => ({
  type: DELETE_DATA,
  payload
});
