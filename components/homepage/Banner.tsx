import { Button, Grid, Link, Spacer, Text } from '@nextui-org/react'
import React from 'react'

function Banner() {
  return (
      <Grid.Container
        css={{ margin: "$0", padding: "$10", paddingTop: '$14', paddingBottom: '$16', backgroundColor: "#522f63" }}
        justify="center"
      >
        <Grid xs={12} sm={4} md={4} css={{ justifyContent: 'center', "@smMax": {marginBottom: "$12"} }}>
          <div style={{ textAlign: "center", justifyItems: 'center', justifyContent: "center", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Text size={'26px'} weight={"medium"}>Discover a World of Swapping and Selling</Text>
            <Text size={'16px'}>Explore a marketplace for new, like-new, and preowned treasures.</Text>
            <Button auto style={{ color: "white", fontSize: "18px" ,backgroundColor: "transparent", textDecoration: 'underline' }}>Join Now</Button>
          </div>
        </Grid>

        <Grid xs={12} sm={4} md={4} css={{ justifyContent: 'center', "@smMax": {marginBottom: "$12"} }}>
            <div style={{textAlign: "center", justifyItems: 'center', justifyContent: "center", display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
              <Text size={'26px'} weight={"medium"}>Swap and Save</Text>
              <Text size={'16px'}>Turn items into cash with ease.</Text>
              <Button auto style={{ color: "white", fontSize: "18px" ,backgroundColor: "transparent", textDecoration: 'underline' }}>List an Item</Button>
            </div>
        </Grid>

        <Grid xs={12} sm={4} md={4} css={{ justifyContent: 'center', "@smMax": {marginBottom: "$10"} }}>
            <div style={{textAlign: "center", justifyItems: 'center', justifyContent: "center", display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
              <Text size={'24px'} weight={"medium"}>Unlock Savings with Swapping - Up to 70% Off Retail</Text>
              <Text size={'16px'}>Trade, swap, and save with exclusive promotions and flash deals for significant discounts.</Text>
              <Button auto style={{ color: "white", fontSize: "18px" ,backgroundColor: "transparent", textDecoration: 'underline' }}>Explore Amazing Deals</Button>
            </div>
        </Grid>
    </Grid.Container>

  )
}

export default Banner