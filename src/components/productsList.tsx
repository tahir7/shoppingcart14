import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useProduct from "../hooks/useProduct";
import Product from "./product";
import { useState } from "react";
import { productSchema } from "../models/dataStructure";
import { paginate } from "./utils/paginate";

interface Props {
  selectedCriteria: string;
}

const ProductsList = (props: Props) => {
  let databyCategory: productSchema[] = [
    {
      id: -1,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: { rate: 0, count: 0 },
    },
  ];

  const [page, setPage] = useState(1);
  const pageSize = 4;

  const handleChangePage = (p: number) => {
    setPage(p);
    // console.log("handleChangePage ", p, "  page  ", page);
  };

  const { data, error, isLoading } = useProduct();

  if (props.selectedCriteria != "All") {
    databyCategory = data.filter((d) => d.category === props.selectedCriteria);
  }

  // console.log("data :: ", data);

  if (isLoading)
    return (
      <Text color="blue.900" fontSize="2xl">
        Loading.......
      </Text>
    );

  if (error)
    return (
      <Text color="blue.900" fontSize="2xl">
        {error.message}
      </Text>
    );

  const paginateddata: productSchema[] = paginate(
    databyCategory.length <= 1 ? data : databyCategory,
    page,
    pageSize
  );

  if (paginateddata.length === 0) setPage(1);

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 4 }} padding="15px">
        {paginateddata?.map((prod) => (
          <Product key={prod.id} product={prod} />
        ))}

        <Button
          colorScheme="blue"
          className="btn btn-primary"
          // isDisabled={page === 5 ? true : false}
          isDisabled={
            databyCategory.length <= 1
              ? page === 5
                ? true
                : false
              : page === Math.ceil(databyCategory.length / 4)
              ? true
              : false
          }
          onClick={() => handleChangePage(page + 1)}
        >
          Next
        </Button>
        <Button
          colorScheme="blue"
          className="btn btn-primary"
          isDisabled={page === 1 ? true : false}
          onClick={() => handleChangePage(page - 1)}
          mx={2}
        >
          Previous
        </Button>
      </SimpleGrid>
    </>
  );
};

export default ProductsList;
