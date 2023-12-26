import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { productSchema } from '../models/dataStructure';
import storedProducts from "../models/initialData.json"

const useProduct = () => {

    // console.log("data in file  " , data);
    const fetchProducts = () =>
        axios
        .get<productSchema[]>("https://fakestoreapi.com/products")
        .then((res) => res.data)

        // useQuery<productSchema[], Error> , initialData was not working with it
    return useQuery<productSchema[],Error>({
        queryKey: ["ProductsCache"],
        queryFn: fetchProducts,
        initialData: storedProducts,
        retry: 3,
        staleTime: 10 * 60 * 1000,

    });
}

// 1*60*1000 = 1 minute
export default useProduct;