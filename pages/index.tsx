"use client"

import { Container, Text, Button, Grid, Col } from '@nextui-org/react';
import InfoCard from '../components/InfoCard';
import { useRouter } from 'next/router';
import { useUserContext } from '../Context/UserContext';


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
    <Container>
      {/* Jumbotron */}
      <Grid.Container justify="center" css={{"height": "500px"}}>
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

      {/* 3 Displaying Product Cards */}
      {/* <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Course"
            title="Learn Next.js With Cooper Codes"
            imageURL="https://littlevisuals.co/images/red_dawn.jpg"
            studentCount="3,500"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Course"
            title="Learn Apollo Server With Cooper Codes"
            imageURL="https://littlevisuals.co/images/sunset.jpg"
            studentCount="1,000"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Course"
            title="Create A Startup With Cooper Codes"
            imageURL="https://littlevisuals.co/images/tail.jpg"
            studentCount="5,000"
          />
        </Grid>
      </Grid.Container> */}
    </Container>
  )
}

export default Home