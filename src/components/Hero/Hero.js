import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="https://vod-progressive.akamaized.net/exp=1642163748~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F789%2F7%2F178947119%2F583336002.mp4~hmac=123ede40ae00caf2807dc6648ae02a7deb4113d576e9d83149025f3b18ba9f35/vimeo-prod-skyfire-std-us/01/789/7/178947119/583336002.mp4?filename=Animation+Of+Digital+Human+Face.mp4" autoPlay loop muted/>
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
