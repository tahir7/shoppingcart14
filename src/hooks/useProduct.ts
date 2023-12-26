import { useQuery } from '@tanstack/react-query';
import { productSchema } from '../models/dataStructure';
import storedProducts from "../models/initialData.json";
import APIClient from "../services/apiClient";

 
const useProduct = () => { 

    const apiClient = new APIClient<productSchema>("/products");
   
    return useQuery<productSchema[],Error>({
        queryKey: ["ProductsCache"],
        queryFn: apiClient.getAll,
        initialData: storedProducts,
        retry: 3,
        staleTime: 10 * 60 * 1000,

    });
}

// 1*60*1000 = 1 minute
export default useProduct;