import { motion } from "framer-motion";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroContainer className={`relative w-full h-screen mx-auto`}>
      <ContentWrapper className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX}`}>
        <MainWrapper>
         
          <TextContainer>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#E6D02A]">Justina</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am good at creating, such as <br className="sm:block hidden" />
              drawing, modeling and crafting <br className="sm:block hidden" />
              <br className="sm:block hidden" />
              Plan to study interaction design <br className="sm:block hidden" />
              at National Taiwan University of <br className="sm:block hidden" />
              Science and Technology
              
            </p>
            <Social>
              <p>Check out my</p>
              <div className="social-icons">
                <span>
                  <a href="https://www.instagram.com/ds_justina_lmao/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
                    <AiOutlineInstagram />
                  </a>
                </span>
                <span>
                  <a href = "mailto: justinacoffee1110@gmail.com">
                    <AiOutlineMail />
                  </a>
                </span>
                <span>
                  <a href="https://www.facebook.com/justina.kit.7">
                    <AiOutlineFacebook />
                  </a>
                </span>
              </div>
            </Social>
          </TextContainer>
          <ProfileContainer>
            <a href="#about">
              <motion.img
                src={'./self.png'}
                alt="profile"
                whileHover={{ scale: 1.1 }}
                className="w-100 h-100 object-cover rounded-full"
              />
            </a>
          </ProfileContainer>
        </MainWrapper>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 120px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 5rem;
  width: 100%;
  max-width: 1400px;
  padding: 0 2rem;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  @media (max-width: 640px) {
    flex-direction: column-reverse;
  }
`;

const TextContainer = styled.div`
  flex: 1;
`;

const ProfileContainer = styled.div`
  flex: 1;
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (min-width: 768px) {
      margin-left: auto;
    }
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }

    @media (max-width: 480px) {
      width: 50%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;

const Social = styled.div`
  display: flex;
  padding-top: 30px;
  align-items: center;
  gap: 1rem;
  span {
    width: 2.5rem;
    height: 2.2rem;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    background-color: #E6D02A;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem; // Add this line
    a {
      color: #fff;
      position: absolute;
    }
  }
`;
