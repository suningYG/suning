import axios from "axios"

const get = ({url}) =>{
    return axios({
        url,
    })
    .then(result =>{
        // console.log(result)
        return result
    })
    .catch(e=>{
        console.log(e)
        return e
    })
}

export {
    get
}