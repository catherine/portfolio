import { ImageRow } from "../components/ImageRow";
import { PageContainer } from "../components/PageContainer";
import { Image } from "../components/Image";

import Me_1 from "../assets/self_photo3.jpg";
import Me_2 from "../assets/self_photo4.jpg";

import "./About.css";

export const About = () => {
  return (
    <PageContainer>
      <div className="about">
        <div className="about-desktopImage">
          <Image src={Me_1} />
        </div>
        <div>
          <h1 className="bodyBold">Hi, I'm Catherine!</h1>
          <p>
            I'm a Software Engineer and Photographer based in San Francisco, CA.
          </p>
          <p>
            Outside of building websites, I find joy in having a camera in hand
            to capture moments during concerts and weddings. My portfolio
            includes a diverse range of artists, from local shows to
            international festivals, and my work has been featured in various
            online and print music publications.
          </p>
          <p>
            In 2016 and 2017, I took on the role of Photography Teaching
            Assistant for a month-long summer study abroad program in Berlin,
            Germany. It was an exciting opportunity to share my love for art and
            technology with Northeastern University students.
          </p>
          <p>
            <span className="bodyBold">Email:&nbsp;</span>
            <a href="mailto:patchell.catherine@gmail.com">
              patchell.catherine@gmail.com
            </a>
          </p>
          <p>
            <span className="bodyBold">Instagram:&nbsp;</span>
            <a href="http://www.instagram.com/cmpatchell" target="_blank">
              @cmpatchell
            </a>
          </p>
        </div>
      </div>

      <div className="about-mobileImage">
        <ImageRow images={[Me_1, Me_2]} />
        {/* <Image isVertical src={Me_1} />
        <Image isVertical src={Me_2} /> */}
      </div>
    </PageContainer>
  );
};
