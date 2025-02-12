import Image from "../components/Image";
import PageContainer from "../components/PageContainer";

import A_1x from "../assets/portraits/DSC_2242.jpg";
import B_1x from "../assets/portraits/DSC_1347.jpg";
import C_1x from "../assets/portraits/DSC_2195.jpg";
import D_1x from "../assets/portraits/Capture0005-6.jpg";
import E_1x from "../assets/portraits/DSC_0089.jpg";
import F_1x from "../assets/portraits/Capture0135.jpg";
import G_1x from "../assets/portraits/DSC_1662.jpg";
import H_1x from "../assets/portraits/DSC_1221.jpg";



const Portraits = () => {
  return (
    <PageContainer>
      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <div>
          <Image isVertical src={A_1x} />
        </div>
        <div>
          <Image isVertical src={B_1x} />
        </div>
      </div>

      <Image src={C_1x} />

      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <div>
          <Image isVertical src={D_1x} />
        </div>
        <div>
          <Image isVertical src={E_1x} />
        </div>
      </div>

      <Image src={F_1x} />

      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <div>
          <Image isVertical src={G_1x} />
        </div>
        <div>
          <Image isVertical src={H_1x} />
        </div>
      </div>
    </PageContainer>
  );
};

export default Portraits;
