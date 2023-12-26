import { List } from "@chakra-ui/react";
import useCategory from "../hooks/useCategory";
import { propsCategories } from "../models/dataStructure";

const Categories = (props: propsCategories) => {
  const { data, error, isLoading } = useCategory();

  // console.log("data ", data);

  let cat: [{ id: number; name: string }];

  cat = [{ id: -1, name: "All" }];

  if (isLoading) return <h2> Loading </h2>;

  if (error) return <h2>Error</h2>;

  data?.map((d, i) => cat.push({ id: i, name: d }));

  // console.log("cat ", cat);

  return (
    <>
      <List spacing={5} mx={2} mt={7}>
        {cat?.map((c) => (
          <li key={c.id} onClick={() => props.selectedCriteria(c.name)}>
            {c.name}
          </li>
        ))}
      </List>
    </>
  );
};

export default Categories;
