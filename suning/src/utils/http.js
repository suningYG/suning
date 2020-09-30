import axios from "axios"

const get = ({url,params}) =>{
    return axios({
        url,
        params
    
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