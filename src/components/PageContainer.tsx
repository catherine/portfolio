import { ReactNode } from "react";
import Navbar from "./Navbar";

import "./PageContainer.css";

interface PageContainerProps {
  children: ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="pageContainer" style={{ height: "100vh" }}>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/about" element={<Contact />} />
      </Routes> */}
      <div className="pageContainer-content">{children}</div>
    </div>
  );
}

export default PageContainer;
