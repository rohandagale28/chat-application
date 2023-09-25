import axios from "axios";

const url = "http://localhost:5000";

export const addUser = async (data: any) => {
  try {
    await axios.post(`${url}/add`, data).then(res => console.log(res.data));
  } catch (err) {
    console.log("Axios Error", err);
  }
};

export const getUsers = async () => {
  try {
    const res = await axios.get(`${url}/users`);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const setConversation = async (data: any) => {
  try {
    await axios.post(`${url}/conversation`, data).then(res => console.log(res));
  } catch (err) {
    console.log("Error while getting user", err);
    return err;
  }
};

export const getConversation = async (data: any) => {
  try {
    const res = await axios.post(`${url}/conversation/get`, data);
    return res.data;
  } catch (err) {
    console.log("Error while getting user", err);
    return err;
  }
};

export const newMessage = async (data: any) => {
  try {
    await axios.post(`${url}/message/add`, data);
  } catch (err) {
    console.log("Error while getting user", err);
    return err;
  }
};

export const getMessages = async (id: any) => {
  try {
    const res = await axios.get(`${url}/message/get/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
