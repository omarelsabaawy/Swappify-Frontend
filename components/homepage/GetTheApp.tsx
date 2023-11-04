import { Container, Grid, Link, Text, } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

function GetTheApp() {
  return (
    <div className='background'style={{ display: 'flex', flexDirection: 'column' }}>
      <Container>
        <Grid.Container>
            <Grid xs={12} sm={6} md={6}>
                <Container css={{display: 'flex', flexDirection: "column", padding: "5%", marginTop: "$18", "@smMax":{marginTop: "$0"}}} >
                    <Text size={"$5xl"} color={"#000066"} weight={"bold"} css={{"@smMax":{textAlign: 'center'}}}>Coming soon</Text>
                    <Text size={'$3xl'} color={"#000066"} css={{ "@smMax": { textAlign: 'center' } }}>Swap and Sell. Discover endless possibilities.</Text>
                    <div className='centerOnSmallScreens' style={{ alignItems: 'center', justifyContent: 'center', marginTop: '1rem' }}>
                        <Image src="/images/AppStore.webp" alt="App Store"  width={150} height={46} />                        
                        <Image src="/images/GooglePlay.webp" alt="App Store" width={150} height={46} />
                    </div>
                </Container>
            </Grid>
             <Grid
            xs={12}
            sm={6}
            md={6}
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* <Image src={'/images/get-the-app-3-desktop.webp'} alt='get the app' layout="intrinsic" width={500} height={400} /> */}
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
}

export default GetTheApp;
