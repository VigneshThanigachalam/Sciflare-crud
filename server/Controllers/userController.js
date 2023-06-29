import axios from "axios";
import asyncHandler from "express-async-handler";

const baseURL =
  "https://crudcrud.com/api/5473d1c9520c4442b49a17a760767e68/users";
//  add user
export const addUser = asyncHandler(async (req, res) => {
  const { name, age } = req.body;

  // fetch the data
  const { data } = await axios.get(baseURL);

  //   find the user already exists or not
  const isExist = data.filter((user) => user.name === name && user.age === age);

  if (isExist.length === 0) {
    const { statusText } = await axios.post(baseURL, { name, age });
    res.json({
      message: statusText,
    });
  } else {
    res.json({
      message: "user name already exists",
    });
  }
});

export const getAllUser = asyncHandler(async (req, res) => {
  try {
    // fetch the user data
    const { data } = await axios.get(baseURL);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

export const getSingleUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${baseURL}/${id}`);
    res.json(data);
  } catch (error) {
    console.log("error");
  }
});

export const updateUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    const { statusText } = await axios.put(`${baseURL}/${id}`, { name, age });
    res.json({ message: statusText });
  } catch (error) {
    console.log(error);
  }
});

export const deleteUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { statusText } = await axios.delete(`${baseURL}/${id}`);
    res.json({ message: statusText });
  } catch (error) {
    console.log(error);
  }
});
