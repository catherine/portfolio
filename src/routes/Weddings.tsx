import { PageContainer } from "../components/PageContainer";
import { Image } from "../components/Image";
import { ImageGrid } from "../components/ImageGrid";
import { ImageRow } from "../components/ImageRow";

import Wedding_1 from "../assets/weddings/DSC_5573.jpg";
import Wedding_2 from "../assets/weddings/DSC_1849.jpg";
import Wedding_3 from "../assets/weddings/DSC_1397.jpg";

import Wedding_4 from "../assets/weddings/DSC_2388.jpg";
import Wedding_5 from "../assets/weddings/DSC_2083.jpg";
import Wedding_6 from "../assets/weddings/DSC_1823.jpg";
import Wedding_7 from "../assets/weddings/DSC_2078.jpg";
import Wedding_8 from "../assets/weddings/DSC_1900.jpg";
import Wedding_9 from "../assets/weddings/DSC_2284.jpg";
import Wedding_10 from "../assets/weddings/DSC_9339.jpg";
import Wedding_11 from "../assets/weddings/DSC7601.jpg";
import Wedding_12 from "../assets/weddings/DSC_9535.jpg";
import Wedding_13 from "../assets/weddings/DSC_9488.jpg";
import Wedding_14 from "../assets/weddings/DSC_9375.jpg";
import Wedding_15 from "../assets/weddings/DSC7725.jpg";
import Wedding_16 from "../assets/weddings/DSC_2018.jpg";
import Wedding_17 from "../assets/weddings/DSC_1951.jpg";
import Wedding_18 from "../assets/weddings/DSC_0496.jpg";
import Wedding_19 from "../assets/weddings/DSC_0445.jpg";

import Wedding_20 from "../assets/weddings/DSC_1480.jpg";
import Wedding_21 from "../assets/weddings/DSC7629.jpg";
import Wedding_22 from "../assets/weddings/DSC_0164.jpg";

import Wedding_23 from "../assets/weddings/DSC4069.jpg";
import Wedding_24 from "../assets/weddings/DSC_0336.jpg";
import Wedding_25 from "../assets/weddings/DSC_5636.jpg";
import Wedding_26 from "../assets/weddings/DSC_1410.jpg";
import Wedding_27 from "../assets/weddings/DSC_2162.jpg";
import Wedding_28 from "../assets/weddings/DSC_5948-2.jpg";

export const Weddings = () => {
  return (
    <PageContainer>
      <ImageGrid images={[Wedding_1, Wedding_2, Wedding_3]} />
      <Image src={Wedding_4} />
      <ImageRow images={[Wedding_5, Wedding_6]} shouldShowVerticalOnMobile />
      <Image src={Wedding_7} />
      <ImageRow images={[Wedding_8, Wedding_9]} shouldShowVerticalOnMobile />
      <Image src={Wedding_10} />
      <ImageRow images={[Wedding_11, Wedding_12]} shouldShowVerticalOnMobile />
      <Image src={Wedding_13} />
      <ImageRow images={[Wedding_14, Wedding_15]} shouldShowVerticalOnMobile />
      <Image src={Wedding_16} />
      <ImageRow images={[Wedding_17, Wedding_18]} shouldShowVerticalOnMobile />
      <Image src={Wedding_19} />
      <ImageGrid images={[Wedding_22, Wedding_20, Wedding_21]} />
      <Image src={Wedding_23} />
      <ImageRow images={[Wedding_24, Wedding_25]} shouldShowVerticalOnMobile />
      <Image src={Wedding_26} />
      <ImageRow images={[Wedding_27, Wedding_28]} shouldShowVerticalOnMobile />
    </PageContainer>
  );
};
