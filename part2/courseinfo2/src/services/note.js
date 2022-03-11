/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
const url = 'http://localhost:3001/notes';

const getAll = () => {
  return axios.get(url);
};

const create = (newObj) => {
  return axios.post(url, newObj);
};

const update = (id, newObj) => {
  return axios.put(`${url}/${id}`, newObj);
};
const deleteNote = (id) => {
  return axios.delete(`${url}/${id}`);
};

export default {
  getAll,
  create,
  update,
  deleteNote,
};
