import axios from 'axios';

export const httpClientPlugin = {

    get: async(url: string)=>{
 
        const {data} = await axios.get(url)
        return data
        
    },
    post: async(url: string, data: any)=>{
        throw new Error("Not Implemented");
        
    },
    put: async(url: string, data: any)=>{
        throw new Error("Not Implemented");
        
    },
    delete: async(url: string)=>{
        throw new Error("Not Implemented");
        
    }

}