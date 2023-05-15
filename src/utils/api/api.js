import axios from "axios";
import { BASE_URL, STATUS_SUCCESS } from "../constants/constants";

//POST REQUESTS

export const authLogin = async (body) => {
  try {
    const res = await axios.post(`${BASE_URL}/admin/auth`, body);
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

export const saveProjects = async (body) => {
  const authToken = localStorage.getItem("token");
  try {
    const res = await axios.post(`${BASE_URL}/admin/save-project`, body, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const uploadImage = async (file) => {
  const authToken = localStorage.getItem("token");
  try{
    const form = new FormData();
    form.append('file',file)
    const res = await axios.post(`${BASE_URL}/upload-image`, form,{  
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === STATUS_SUCCESS) {
      console.log(res);
      return res.data;
    }
    console.log(res);
    
  } catch (error) {
    return error;
  }
}

export const saveSip = async (body) => {
  const authToken = localStorage.getItem("token");
  try {
    const res = await axios.post(`${BASE_URL}/admin/save-sip`, body, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
    console.log(res);
  } catch (error) {
    return error;
  }
};

export const uploadFile = async (file) => {
  const authToken = localStorage.getItem("token");
  try{
    const form = new FormData();
    form.append('file',file)
    
    const res = await axios.post(`${BASE_URL}/upload-document`, form,{  
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === STATUS_SUCCESS) {
      console.log(res);
      return res.data;
    }
    console.log(res);
    
  } catch (error) {
    return error;
  }
}

export const savePortfolioCompany = async (body) => {
  const authToken = localStorage.getItem("token");
  try {
    const res = await axios.post(`${BASE_URL}/admin/save-portfolio-company`, body, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
    console.log(res);
  } catch (error) {
    return error;
  }
}

export const savePortfolioInvestor = async (body) => {
  const authToken = localStorage.getItem("token");
  try {
    const res = await axios.post(`${BASE_URL}/admin/save-portfolio-investors`, body, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
    console.log(res);
  } catch (error) {
    return error;
  }
}


// PUT requests

export const editPortfolioCompany = async (body) => {
  const authToken = localStorage.getItem("token");
  try {
    const res = await axios.put(`${BASE_URL}/admin/save-portfolio-company`, body, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
    console.log(res);
  } catch (error) {
    return error;
  }
}

export const editPortfolioInvestor = async (body) => {
  console.log("body",body);
  const authToken = localStorage.getItem("token");
  try {
    const res = await axios.put(`${BASE_URL}/admin/save-portfolio-investors`, body, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
    console.log(res);
  } catch (error) {
    return error;
  }
}

export const projectEdit = async (body) => {
  const authToken = localStorage.getItem("token");
  try {
    const res = await axios.put(`${BASE_URL}/admin/save-project`, body, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const sipEdit = async (body) => {
  const authToken = localStorage.getItem("token");
  try {
    const res = await axios.put(`${BASE_URL}/admin/save-sip`, body, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
    console.log(res);
  } catch (error) {
    return error;
  }
};

export const investorEdit = async (body) =>{
  const authToken = localStorage.getItem("token");
  try{
    const res = await axios.put(`${BASE_URL}/admin/save-investor`,body,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
    console.log(res);
  } catch (error) {
    return error;
  }
}

export const userEdit = async (body) =>{
  const authToken = localStorage.getItem("token");
  try{
    const res = await axios.put(`${BASE_URL}/admin/save-user`,body,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
    console.log(res);
  } catch (error) {
    return error;
  }
}

export const companyEdit = async (body) => {
  const authToken = localStorage.getItem("token");
  try{
    const res = await axios.put(`${BASE_URL}/admin/save-company`,body,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
    console.log(res);
  } catch (error) {
    return error;
  }
}


//GET REQUESTS

export const getProjects = async () => {
  const authToken = localStorage.getItem("token");
  try {
    const res = await axios.get(`${BASE_URL}/admin/project-list`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

export const getSip = async () => {
  const authToken = localStorage.getItem("token");
  try {
    const res = await axios.get(`${BASE_URL}/admin/sip-list`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === STATUS_SUCCESS) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

export const getInvestors = async () => {
  const authToken = localStorage.getItem("token");
  try {
    const resp = await axios.get(`${BASE_URL}/admin/investor-list`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (resp.status === STATUS_SUCCESS) {
      return resp.data;
    }
  } catch (error) {
    return error;
  }
};

export const getUsers = async () => {
  const authToken = localStorage.getItem("token");
  try {
    const resp = await axios.get(`${BASE_URL}/admin/user-list`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (resp.status === STATUS_SUCCESS) {
      return resp.data;
    }
  } catch (error) {
    return error;
  }
};

export const getCompanies = async () => {
  const authToken = localStorage.getItem("token");
  try {
    const res = await axios.get(`${BASE_URL}/admin/get-company-list`,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if(res.status === STATUS_SUCCESS) {
      return res.data;
    }
  } catch (error){
    return error
  }
}

export const getPortfolioCompanies = async () => {
  const authToken = localStorage.getItem("token");

  try {
    const res = await axios.get(`${BASE_URL}/admin/portfolio-companies`,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if(res.status === STATUS_SUCCESS) {
      return res.data;
    }
  } catch (error){
    return error
  }
}

export const getPortfolioInvestors = async () => {
  const authToken = localStorage.getItem("token");

  try {
    const res = await axios.get(`${BASE_URL}/admin/portfolio-investors`,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if(res.status === STATUS_SUCCESS) {
      return res.data;
    }
  } catch (error){
    return error
  }
}

export const getDataDictionaryValues = async() =>{

  const authToken = localStorage.getItem("token");

  try {
    const res = await axios.get(`${BASE_URL}/list-data-dictionaries`,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if(res.status === STATUS_SUCCESS){
      return res.data;
    }
  } catch (error){
    return error
  }
}

export const getCoInvestors = async() =>{
  const authToken = localStorage.getItem("token");
  try {
    const res = await axios.get(`${BASE_URL}/admin/get-co-investors`,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if(res.status === STATUS_SUCCESS){
      return res.data;
    }
  } catch (error){
    return error
  }
}

export const getQueries = async() => {
  const authToken = localStorage.getItem("token");
  try {
    const res = await axios.get(`${BASE_URL}/admin/get-queries`,{
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if(res.status === STATUS_SUCCESS){
      return res.data;
    }
  } catch (error){
    return error
  }
}
