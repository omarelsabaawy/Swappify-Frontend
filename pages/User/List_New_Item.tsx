import React from 'react'
import DragAndDrop from '../../components/Add-Items/DragAndDrop'
import { Container, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'

function List_New_Item() {

  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <Container css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '0.5%',
        zIndex: '1',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <button type='button' onClick={handleBackButtonClick} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginTop: '1rem', marginLeft: '1rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
      </div>

      <Text
        weight={"bold"}
        h2
        css={{
          "textAlign": "center",
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
          textTransform: 'uppercase'
        }}>List A New Product</Text>

      <Row>
        <Text h4 css={{marginLeft: '15%', "@smMax":{marginLeft: '$1',}}}>Photos :</Text>
      </Row>
      <Container css={{boxSizing: 'border-box', width: '70%',  marginTop: '1%', "@smMax":{  width: '100%', marginTop: '1%',}}}>
        <DragAndDrop />
      </Container>
      <Row>
        <Text h4 css={{marginLeft: '15%', marginTop: '$3', "@smMax":{marginLeft: '$1',}}}>Product Info :</Text>
      </Row>
      

    </Container>
  )
}

export default List_New_Item