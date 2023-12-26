import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { productSchema } from "../models/dataStructure";

interface Props {
  product: productSchema;
}
const Product = ({ product }: Props) => {
  // console.log("Prod ", product);

  return (
    <>
      {/* {product.id % 2 === 0 ? (color = "red") : color} */}
      <Card borderRadius={10} mx={1}>
        <CardHeader>
          <Heading size="xs">{product.title}</Heading>
        </CardHeader>
        <Image src={product.image} boxSize="120px" alt={product.title} />

        <CardBody>{product.description}</CardBody>
        <Text color="blue.600" fontSize="2xl">
          ${product.price}
        </Text>
        <CardFooter>
          <Button colorScheme="blue" m="1">
            Add
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Product;
