
import { httpGetField, httpPost } from "./AxiosHelper";


export const apiRegister = (data) => {
    return new Promise((resolve, reject) => {

        httpPost({ path: "/get-otp", body: data })
            .then(({ data }) => {
                if (data) {
                    console.log("data in api recived:", data)
                    console.log(data.data.transactionToken);
                    localStorage.setItem("transactionToken", data.data.transactionToken)
                    resolve(data)
                } else {
                    reject(data.description)
                }
            })
            .catch(err => console.log(err))
    })
}
export const verifyOtp = (data) => {
    return new Promise((resolve, reject) => {

        httpPost({ path: "/verify-otp", body: data })
            .then(({ data }) => {
                if (data) {
                    console.log("data in api recived:", data)
                    resolve(data)
                } else {
                    reject(data.description)
                }
            })
            .catch(err => console.log(err))
    })
}


export const verifyPan = (data) => {
    return new Promise((resolve, reject) => {
        const jwt = localStorage.getItem("JWT")
        console.log("from local", jwt);

        httpPost({ path: "/verify-pan", body: data, JWT: jwt })
            .then(({ data }) => {
                if (data) {
                    console.log("data in api recived:", data)
                    resolve(data)
                } else {
                    reject(data.description)
                }
            })
            .catch(err => console.log(err))
    })
}


export const postContributionForm = (data) => {
    return new Promise((resolve, reject) => {
        httpGetField({ path: "/get-esign-values", body: data })
            .then(({ data }) => {
                if (data) {
                    resolve(data.data)
                }
                else {
                    reject(data.description)
                }
            })
            .catch(err => console.log(err))
    })
}


export const createEsign = (data) => {
    return new Promise((resolve, reject) => {
        console.log('inside api')
        httpGetField({ path: "/create-esign", body: data })
            .then(({ data }) => {
                if (data) {
                    console.log("test api")
                    console.log(data)
                    resolve(data)
                }
                else {
                    reject(data.description)
                }
            })
            .catch(err => console.log(err))
    })
}



