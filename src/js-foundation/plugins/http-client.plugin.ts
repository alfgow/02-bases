import axios from 'axios';

export const httpClientPlugin = {

    get: async(url: string)=>{
 
        const {data} = await axios.get(url)
        return data
        
    },
    post: async(url: string, data: any)=>{},
    put: async(url: string, data: any)=>{},
    delete: async(url: string)=>{}

}
