import React from 'react'
import DragAndDrop from '../../components/Add-Items/DragAndDrop'
import {  Container, Dropdown, Grid, Input, Row, Spacer, Text, Textarea } from '@nextui-org/react'
import { useRouter } from 'next/router'
import TopLogo from './TopLogo';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function List_New_Item() {

  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };

  const [selected, setSelected] = React.useState(new Set(["Swap"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const handleSelectionChange = (newSelection: any) => {
    setSelected(newSelection); // Update the 'selected' state with the new selection
  };

  return (
    <Container css={{maxWidth: '100%', margin: 0, padding: 0}}>
      <Container css={{ maxWidth: '100%', height: '50px', backgroundColor: '$secondary', paddingTop: '$3', position: 'relative' }}>
        <Container css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
          <span><TopLogo /></span>
          <Text weight={'medium'} transform='full-size-kana' css={{ marginTop: '$2' }}>List an item</Text>
        </Container>
        <div style={{
        position: 'absolute', bottom: '4px', left: '0',
        // left: '0.5%',
        zIndex: '1',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <button type='button' onClick={handleBackButtonClick} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginTop: '1rem', marginLeft: '1rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="5" x2="19" y2="19"></line>
            <line x1="5" y1="19" x2="19" y2="5"></line>
          </svg>
        </button>
      </div>
      </Container>

      <Container css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '120vh' }}>
       <Container
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between', // This will place items on the left and right
            boxSizing: 'border-box',
            width: '70%',
            marginTop: '1%',
            marginBottom: '$8',
            '@smMax': {
              maxWidth: '100%',
              width: '100%',
              marginTop: '1%',
            },
          }}
        >
          {/* Left Corner - Breadcrumb */}
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="grey" href="/">
                Swappify
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/User/List_New_Item"
                aria-current="page"
              >
                List an item
              </Link>
            </Breadcrumbs>

          {/* Right Corner - Inner Container */}
            <Dropdown placement="bottom-right">
              <Dropdown.Button shadow color="secondary" css={{ textTransform: "capitalize" }}>
                {selectedValue}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={handleSelectionChange}
              >
                <Dropdown.Item key="Swap" description='Want to Swap this Item'>Swap</Dropdown.Item>
                <Dropdown.Item key="Sell" description='Want to Sell this Item'>Sell</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </Container>



        <Row>
          <Text h4 color='default' css={{marginLeft: '17%', "@smMax":{marginLeft: '$10'}}}>Photos :</Text>
        </Row>
        <Container css={{boxSizing: 'border-box', width: '70%',  marginTop: '1%', "@smMax":{ maxWidth: '100%', width: '100%', marginTop: '1%',}}}>
          <DragAndDrop />
        </Container>
          <Container css={{boxSizing: 'border-box', width: '70%',  marginTop: '1%', "@smMax":{  width: '100%', marginTop: '1%',}}}>
            <Text h4 css={{marginTop: '$3', marginBottom: '$8', "@smMax": { marginLeft: '$1', } }}>Product Info :</Text>
            <Grid>
              <Input
                label="Title"
                borderWeight='bold'
                aria-label='Title'
                placeholder="What are you Selling?"
                maxLength={80}
                fullWidth
                bordered
                clearable
              />
            </Grid>
            <Spacer />
            <Grid>
              <Textarea
                label="Description"
                borderWeight='bold'
                aria-label='Description'
                placeholder="Describe your item"
                maxLength={1000}
                fullWidth
                bordered
              />
            </Grid>
            <Spacer />
            <Grid>
              
            </Grid>
        </Container>
      </Container>
    </Container>
  )
}

export default List_New_Item