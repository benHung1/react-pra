import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="https://player.vimeo.com/external/540385516.sd.mp4?s=4225023e56f9587eba85269968e3cc1b76d8721f&profile_id=164&oauth2_token_id=57447761" autoPlay loop muted/>
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
