import { Image } from "../components/Image";
import { PageContainer } from "../components/PageContainer";
import { ImageRow } from "../components/ImageRow";


import A_1x from "../assets/portraits/DSC_2242.jpg";
import B_1x from "../assets/portraits/DSC_1347.jpg";
import C_1x from "../assets/portraits/DSC_2195.jpg";
import D_1x from "../assets/portraits/Capture0005-6.jpg";
import E_1x from "../assets/portraits/DSC_0089.jpg";
import F_1x from "../assets/portraits/Capture0135.jpg";
import G_1x from "../assets/portraits/DSC_1662.jpg";
import H_1x from "../assets/portraits/DSC_1221.jpg";

export const Portraits = () => {
  return (
    <PageContainer>
      <ImageRow images={[A_1x, B_1x]} shouldShowVerticalOnMobile />
      <Image src={C_1x} />
      <ImageRow images={[D_1x, E_1x]} shouldShowVerticalOnMobile />
      <Image src={F_1x} />
      <ImageRow images={[G_1x, H_1x]} shouldShowVerticalOnMobile />
    </PageContainer>
  );
};