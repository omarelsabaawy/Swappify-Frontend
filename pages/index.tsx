import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Text, Button, Grid, Col } from '@nextui-org/react';
import InfoCard from '../components/InfoCard';
import { useRouter } from 'next/router';
import { getSession, useSession } from 'next-auth/react';


const Home = () => {
  const router = useRouter();
  // const session = getSession();
  const { data: session } = useSession();  

  console.log(session);
  const ActionButton = () => {
    if (!session) {
      return router.push('/SignUp')
    } else {
      return router.push('/Swapping')
    }
  }

  return (
    <Container>
      {/* Jumbotron */}
      <Grid.Container justify="center" css={{"height": "500px"}}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{"width": "100%"}}>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>Swappify Your Gear, Simplify Your Sphere!</Text>
            <Button size="md" shadow color="gradient" css={{ "width": "100%", "marginTop": "10px", fontSize: '1.1rem' }}
              onClick={ActionButton}>
              {session ? 'Lets start Swapping' : 'Join For Free'}
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