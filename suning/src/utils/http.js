import axios from "axios"
// ul='https://ifast.suning.com/mzfs/mpapi/slv/slvHallTab.do?u=7309636498&c=&sceneIds=N000075&cityId=010&shopCode=&parameter=&labelId=-1&page=3&count=20&pageTag=191903237&storeCode=&prevueState=&longitude=116.23128&latitude=40.22077&industryType=&bizCode=&source=wxapp'
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