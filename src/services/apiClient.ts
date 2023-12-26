import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com"
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint : string) {
        this.endpoint = endpoint;  
        // console.log("endpoint  : ",endpoint);      
    }
 
    getAll = () => {
        // debugger;
        return axiosInstance
            .get<T[]>(this.endpoint)
            .then(res => res.data)
    }

}
export default APIClient;