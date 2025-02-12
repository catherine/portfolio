import { ReactNode, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

import "./PageContainer.css";
import useScreenSize from "../hooks/useScreenSize";
import { MOBILE_BREAKPOINT } from "../constants";

interface PageContainerProps {
  children: ReactNode;
}

function PageContainer({ children }: PageContainerProps) {

  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarOffset, setNavbarOffset] = useState(0);

  const {width: screenWidth} = useScreenSize();

  useEffect(() => {
    if (navbarRef.current) {
      const offset = navbarRef.current.offsetHeight;
      setNavbarOffset(offset);
    }
  }, []);

  return (
    <div className="pageContainer" style={{ height: "100vh" }}>
      <Navbar navbarRef={navbarRef} />
      <div
        className="pageContainer-content"
        style={{
          marginTop: screenWidth < MOBILE_BREAKPOINT ? navbarOffset : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default PageContainer;
