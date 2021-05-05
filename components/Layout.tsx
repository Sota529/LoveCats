//chakra
import { Box } from "@chakra-ui/layout";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <Box m="10">{children}</Box>;
};
export default Layout;
