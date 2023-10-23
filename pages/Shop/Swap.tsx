import React from 'react';
import { Badge, Button, Card, Col, Container, Grid, Row, Text } from "@nextui-org/react";

const Swapping = () => {
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
    },
  ];

  return (
    <>   
      <Grid.Container gap={1.2} justify="space-between" css={{
        marginTop: '15px',
        "@smMax": {
          margin: '0',
        }
      }}>

      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card css={{
            w: "100%",
            h: "400px",
            "@smMax": {
              w: "95%",
              h: "350px",    
            }
          }} isPressable isHoverable >
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                       <Badge enableShadow variant="bordered" color="primary">
                          New
                        </Badge>
                        <Text h3 color='white'>
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
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
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
                            size={12}
                            weight="bold"
                            transform="uppercase"
                        >
                            Buy Now
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

export default Swapping;