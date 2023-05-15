
import axios from "axios";

export const httpPost = ({ path, queryParams = null, body = null, JWT = null }) => {

    console.log("PATH : " + path)
    console.log(process.env.REACT_APP_BASE_URL + path)
    console.log(body);

    return new Promise(async (resolve, reject) => {

        await axios
            .post(
                `${process.env.REACT_APP_BASE_URL}${path}`,
                body,
                {
                    responseType: 'json',
                    responseEncoding: '',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '*/*',
                        'Authorization': `Bearer ${JWT}`
                    }
                }
            )
            .then((res) => {
                return resolve(res)
            })
            .catch(e => {
                console.log(e);
                reject(e.message);
            }) //TODO : send formatted message
    })
}



export const httpGetField = ({ path, queryParams = null, body = null }) => {

    console.log("PATH : " + path)
    console.log(process.env.REACT_APP_BASE_URL + path)

    let JWT = localStorage.getItem("JWT")
    return new Promise(async (resolve, reject) => {

        await axios
            .post(
                `${process.env.REACT_APP_BASE_URL}${path}`,
                body,
                {
                    responseType: 'json',
                    responseEncoding: '',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '*/*',
                        'Authorization': `Bearer ${JWT}`
                    }
                }
            )
            .then((res) => {
                return resolve(res)
            })
            .catch(e => {
                console.log(e);
                reject(e.message);
            }) //TODO : send formatted message
    })
}