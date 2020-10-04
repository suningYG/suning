import axios from "axios"
<<<<<<< HEAD
// ul='https://ifast.suning.com/mzfs/mpapi/slv/slvHallTab.do?u=7309636498&c=&sceneIds=N000075&cityId=010&shopCode=&parameter=&labelId=-1&page=3&count=20&pageTag=191903237&storeCode=&prevueState=&longitude=116.23128&latitude=40.22077&industryType=&bizCode=&source=wxapp'
const get = ({url}) =>{
    return axios({
        url,
=======

const get = ({url,params}) =>{
    return axios({
        url,
        params
>>>>>>> 1cbe5af19b204e6ae3023da622ca64cd6666b0c9
    
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