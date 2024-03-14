import { Container } from "./_components/container";
import { Sidebar } from "./_components/sidebar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <Container>
        {children}
      </Container>
     
    </>
  );
};

export default BrowseLayout;
