import {
  MainWrapper,
  ImageContainer,
  CarImage,
  TextContainer,
  TitleHome,
  TextHome,
  SubtitleHome,
  TextItemHome,
  SubtitleHomeLet,
} from '../components/Home.styled';

import HomeCar3 from '../assets/images/car4.jpg';

const Home = () => {

  return (
    <main>
      <MainWrapper>
        <ImageContainer>
          <CarImage src={HomeCar3} alt="Beautiful car" width="500" />
        </ImageContainer>
        <TextContainer>
          <TitleHome>Welcome to our car rental company in Ukraine!</TitleHome>
          <TextHome>
            We are your trusted partner in the world of mobility, and we proudly
            offer a wide range of high-quality rental cars to ensure you have
            the best solutions for your travel and transportation needs.
          </TextHome>
          <SubtitleHome>Our services include:</SubtitleHome>
          <ul>
            <TextItemHome>
              Rentals of cars of all classes and brands: Whether you're looking
              for an economical car for city travel or dreaming of a luxurious
              vehicle for a special occasion, we have the right car to meet your
              requirements.
            </TextItemHome>
            <TextItemHome>
              Flexible rental options: We understand that your needs may vary,
              which is why we offer various rental terms and conditions,
              including short-term and long-term rentals.
            </TextItemHome>
            <TextItemHome>
              Convenient online booking: Our website allows you to easily and
              quickly reserve a car at any location and time. Simply choose your
              car, specify your dates and times, and we'll take care of the
              rest.
            </TextItemHome>
            <TextItemHome>
              Customer support: Our team is ready to answer all your questions
              and assist you throughout your rental.
            </TextItemHome>
            <TextItemHome>
              Clean and well-maintained cars: We take great care of our car
              fleet to ensure your safety and comfort.
            </TextItemHome>
          </ul>
          <SubtitleHomeLet>
            Let your journey be unforgettable! Choose our company for your car
            rental needs and enjoy a hassle-free travel experience. Join us
            today and let us make your journey special. Visit our website,
            select your perfect car, and start your adventure today!
          </SubtitleHomeLet>
        </TextContainer>
      </MainWrapper>
    </main>
  );
};

export default Home;
