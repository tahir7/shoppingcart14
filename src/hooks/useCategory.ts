import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<string>("/products/categories");

const useCategory = () => {

     return useQuery({
        
         queryKey: ["ProductsCategory"],
         queryFn: apiClient.getAll,
         initialData: [
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing"
        ],
         retry: 3,

         staleTime: 10 * 60 * 1000,
     });
}
 
export default useCategory;







