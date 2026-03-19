import { useState } from 'react'
import axios from 'axios'
import { useEffect } from "react";

const BASE_URL = "http://localhost:3005";
function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  }

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);

    console.log(response.data);
  }

  const createUser = async (newUser) => {
    //post veri eklemek iiçin kullanılır
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  }

  const updateUser = async (userId, updateUser) => {
    await axios.put(`${BASE_URL}/users/${userId}`, updateUser);
  }

  const deleteUserById = async (userId) => {
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`)
    console.log(deletedResponse.data);
  }
  useEffect(() => {
    deleteUserById("e4ee");
    //getAllUsers();
    //getUserById(2);

    // const newUser = {
    //   "username": "Bİlal",
    //   "passwoed": "3333"

    // }
    // createUser(newUser);

    updateUser("e4ee", {
      "username": "yakup",
      "password": "1234"
    })
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
