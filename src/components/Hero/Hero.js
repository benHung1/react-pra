import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="https://player.vimeo.com/external/368460590.sd.mp4?s=acc6272ec264a62a8947cd8060d81d85a5bbfe01&profile_id=139&oauth2_token_id=57447761" autoPlay loop muted/>
      <Container>
        <MainHeading>Your Data Is Secure With Us</MainHeading>
        <HeroText>
          We Provide The Best Security System For Clients All Over The World
        </HeroText>
        <ButtonWrapper>
          <Link to ="signup">
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
    );
};

export default Hero
