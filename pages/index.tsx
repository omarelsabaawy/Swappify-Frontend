"use client"

import { Container, Text, Button, Grid, Col } from '@nextui-org/react';
import InfoCard from '../components/InfoCard';
import { useRouter } from 'next/router';
import { useUserContext } from '../Context/UserContext';
import Categories from '../components/homepage/Categories';
import Banner from '../components/homepage/Banner';
import GetTheApp from '../components/homepage/GetTheApp';


const Home = () => {
  const router = useRouter();

  const ActionButton = () => {
    if (!user) {
      return router.push('/Auth/SignUp')
    } else {
      return router.push('/Shop/Swap')
    }
  }

  const {user} = useUserContext();

  return (
    <>
      
          <Container>
      {/* Jumbotron */}
      <Grid.Container justify="center" css={{"height": "540px", "@mdMax": {marginBottom: "$12"}, "@smMax": {marginBottom: "$36"}}}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{"width": "100%"}}>
            <Text weight={"bold"} size={70} css={{ "textAlign": "center", textGradient: "45deg, $blue600 -20%, $pink600 50%",}}>Swappify Your Gear,</Text>
            <Text weight={"bold"} size={70} css={{ "textAlign": "center", textGradient: "45deg, $purple600 -20%, $pink600 100%",}}>Simplify Your </Text>
            <Text weight={"bold"} size={70} css={{ "textAlign": "center", textGradient: "45deg, $yellow600 -20%, $red600 100%",}}>Sphere!</Text>
            <Button size="md" shadow color="gradient" css={{ "width": "100%", "marginTop": "10px", fontSize: '1.1rem' }}
            onClick={ActionButton}
            >
              {user ? 'Lets start Swapping' : 'Join For Free'}
              
            </Button>
          </Col>
        </Grid>
      </Grid.Container>
      </Container>
      <Banner />
      <Categories />
      <GetTheApp />
    </>
  )
}

export default Home