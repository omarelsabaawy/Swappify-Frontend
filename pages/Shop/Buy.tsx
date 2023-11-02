import React from 'react';
import { Badge, Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";

const Buying = () => {
    const list = [
    {
      title: "Grey Sofa",
      img: "https://media.istockphoto.com/id/1031444360/photo/poster-above-white-cabinet-with-plant-next-to-grey-sofa-in-simple-living-room-interior-real.jpg?s=612x612&w=0&k=20&c=pKGXC920DL70qkNZp0xYpOF7AKQ9YFUSne_3wbQmJ5A=",
    },
    {
      title: "niki -fabric 2 seater sofa in vivid orange colour",
      img: "https://ii1.pepperfry.com/media/catalog/product/n/i/494x544/niki-fabric-2-seater-sofa-in-vivid-orange-colour-niki-fabric-2-seater-sofa-in-vivid-orange-colour-kovap7.jpg",
    },
    {
      title: "Acme camera",
      img: "https://v1.nextui.org/images/card-example-6.jpeg"
    },
    {
      title: "Sarcomisr Manager Office Chair",
      img: "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/88/764261/1.jpg?7945",
    },
    {
      title: "NEIDEN Bed",
      img: "https://www.ikea.com/eg/en/images/products/neiden-bed-frame-pine__1101966_pe866783_s5.jpg?f=undefined",
    },
    {
      title: "Apple iPad 8 (2020 Model)",
      img: "https://i.ebayimg.com/images/g/4z4AAOSwIwplEZuY/s-l1600.jpg",
      price: "$8.00",
    },
    {
      title: "Apple Ipad mini 6th generation",
      img: "https://i.ebayimg.com/images/g/RMcAAOSwrcxlGiBZ/s-l1600.jpg",
      price: "$7.50",
    },
    {
      title: "BattleField 2024",
      img: "https://www.games2egypt.com/Images/Products/32942?fileFormat=1&height=500",
      price: "$12.20",
    },{
      title: "Grey Sofa",
      img: "https://media.istockphoto.com/id/1031444360/photo/poster-above-white-cabinet-with-plant-next-to-grey-sofa-in-simple-living-room-interior-real.jpg?s=612x612&w=0&k=20&c=pKGXC920DL70qkNZp0xYpOF7AKQ9YFUSne_3wbQmJ5A=",
    },
    {
      title: "niki -fabric 2 seater sofa in vivid orange colour",
      img: "https://ii1.pepperfry.com/media/catalog/product/n/i/494x544/niki-fabric-2-seater-sofa-in-vivid-orange-colour-niki-fabric-2-seater-sofa-in-vivid-orange-colour-kovap7.jpg",
    },
    {
      title: "Acme camera",
      img: "https://v1.nextui.org/images/card-example-6.jpeg"
    },
    {
      title: "Sarcomisr Manager Office Chair",
      img: "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/88/764261/1.jpg?7945",
    },
    {
      title: "NEIDEN Bed",
      img: "https://www.ikea.com/eg/en/images/products/neiden-bed-frame-pine__1101966_pe866783_s5.jpg?f=undefined",
    },
    {
      title: "Apple iPad 8 (2020 Model)",
      img: "https://i.ebayimg.com/images/g/4z4AAOSwIwplEZuY/s-l1600.jpg",
      price: "$8.00",
    },
    {
      title: "Apple Ipad mini 6th generation",
      img: "https://i.ebayimg.com/images/g/RMcAAOSwrcxlGiBZ/s-l1600.jpg",
      price: "$7.50",
    },
    {
      title: "BattleField 2024",
      img: "https://www.games2egypt.com/Images/Products/32942?fileFormat=1&height=500",
      price: "$12.20",
    },
    ];

  return (
    <>
      
      {/* <Container>
        <Button>Filter</Button>
        <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: 'whitesmoke', borderRadius: '1rem' }}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
            onChange={(e) => setAge(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Container> */}

      <Grid.Container justify="center" css={{
        marginTop: '15px',
        "@smMax": {
          margin: 'auto',
        }
      }}>

      {list.map((item, index) => (
       <Grid
          xs={6}
          sm={3}
          md={2.2}
          lg={2.2}
          key={index}
          css={{
            padding: "$6",
            "@mdMax": {
              padding: "$6",
              lg: {
                padding: "$2",
                md: {
                  padding: "$6",
                },
              },
              "@smMax": {
                padding: "$5"
              }
            },
          }}
        >
          <Card css={{
            w: "100%",
            h: "300px",
            margin: '$0',
            "@smMax": {
              w: "95%",
              h: "300px", 
              margin: "0",
              justifyContent: 'center',
            }
          }} isPressable isHoverable >
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                       <Badge enableShadow variant="bordered" color="primary">
                          New
                        </Badge>
                        <Text h4 css={{color: 'WhiteSmoke'}}>
                        {item.title}
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={item.img}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="Card example background"
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#ffffff66",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255)",
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                <Row>
                    <Col>
                    <Text color="black" size={13}>
                        Available
                  </Text>
                  <Text color="black" size={12}>
                        Swap
                    </Text>
                    </Col>
                    <Col>
                    <Row justify="flex-end">
                    <Button flat auto rounded color="secondary">
                        <Text
                            css={{ color: "inherit" }}
                            size={11}
                            weight="bold"
                            transform="uppercase"
                        >
                            Swap Now
                        </Text>
                        </Button>
                    </Row>
                    </Col>
                </Row>
                </Card.Footer>
            </Card>
        </Grid>
      ))}
      </Grid.Container>
    </>    
  );
};

export default Buying;