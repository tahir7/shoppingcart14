import { HStack } from "@chakra-ui/react";
import ColorMode from "./colorMode";

const Navbar = () => {
  return (
    <HStack>
      <div>
        <ColorMode />
      </div>
    </HStack>
  );
};

export default Navbar;
