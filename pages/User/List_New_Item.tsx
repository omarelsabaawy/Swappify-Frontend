import React, { useState } from 'react'
import DragAndDrop from '../../components/Add-Items/DragAndDrop'
import {  Button, Card, Container, Dropdown, Grid, Input, Row, Spacer, Text, Textarea } from '@nextui-org/react'
import { useRouter } from 'next/router'
import TopLogo from './TopLogo';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { TagsInput } from "@enipx/react-tags-input"
import categoriesData from './Categories.json';

function List_New_Item() {

  const router = useRouter();

  const [hashTags, setHashTags] = useState<any[]>([]);

  const handleBackButtonClick = () => {
    router.back();
  };

  const [selected, setSelected] = React.useState(new Set(["Swap"]));
  const [hide, setHide] = useState(false);

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const handleSelectionChange = (newSelection: any) => {
    setSelected(newSelection); // Update the 'selected' state with the new selection
  };

  const conditionData = [
    {
      title: 'New',
      description: 'New with tags. Unopened packaging. Unused.',
      shortDescription: 'Brand New',
    },
    {
      title: 'Like new',
      description: 'New without tags. No signs of used. Unused.',
      shortDescription: 'Like New',
    },
    {
      title: 'Good',
      description: 'Gently used. One/few minor flaws.',
      shortDescription: 'Good Condition',
    },
    {
      title: 'Fair',
      description: 'Used with multiple flaws & defects.',
      shortDescription: 'Fair Condition',
    },
    {
      title: 'Poor',
      description: 'Major flaws, may be damaged.',
      shortDescription: 'Poor Condition',
    },
  ];


  const [selectedCondition,setSelectionCondition] = useState<any>("");

  const categories = categoriesData.categories;

  return (
    <Container css={{height: "2000px",maxWidth: '100%', margin: 0, padding: 0, marginBottom: '5%',}}>
      <Container css={{ maxWidth: '100%', height: '50px', backgroundColor: '$secondary', paddingTop: '$3', position: 'relative' }}>
        <Container css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', "@smMax":{display: 'none'}}}>
          <span><TopLogo /></span>
          <Text weight={'medium'} transform='full-size-kana' css={{ marginTop: '$2', textAlign: 'center' }}>List an item</Text>
        </Container>
        <Container css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', "@lgMax":{display: 'none'}, "@smMax":{display: 'block'}}}>
          <Text weight={'medium'} transform='full-size-kana' size={'$2xl'} css={{ marginTop: '$0', textAlign: 'center' }}>List an item</Text>
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
        <Button auto type='button' onClick={handleBackButtonClick} css={{ backgroundColor: 'transparent', color: "white", border: 'none', cursor: 'pointer', marginTop: '1rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="5" x2="19" y2="19"></line>
            <line x1="5" y1="19" x2="19" y2="5"></line>
          </svg>
        </Button>
      </div>
      </Container>

      <Container css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
       <Container
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between', // This will place items on the left and right
            boxSizing: 'border-box',
            width: '70%',
            marginTop: '3%',
            marginBottom: '$8',
            '@smMax': {
              maxWidth: '100%',
              width: '100%',
              marginTop: '5%',
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
            <label style={{ marginLeft: '5px', fontSize: '14px'}}>
              Hashtags
              <span style={{ color: 'grey' }}> (optional)</span>
            </label>
            <Spacer y={0.1} />
            <TagsInput
              placeholder='Add up to 5 hashtags'
              value={hashTags}
              onChange={setHashTags}
              style={{
                border: `3px solid #262626`,
                minHeight: '47px',
                borderRadius: '1rem',
                fontSize: '0.9rem',
                padding: '0 1rem'
              }}
              hoverStyle={{
                border: `3px solid white`,
              }}
              focusStyle={{
                border: `3px solid white`,
              }}
              tagStyle={{
                border: `2px solid white`,
                borderRadius: '1.9rem',
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
              }}
            />
          </Grid>
          <Spacer />
          <Grid>
            <label style={{ marginLeft: '5px', fontSize: '14px'}}>Category</label>
            <Grid.Container css={{ display: 'flex', margin: '0', marginLeft: '0', padding: '0', paddingLeft: '0'}} gap={1}>
              <Grid lg={6} md={6} xs={12}>
                <Dropdown placement="bottom">
                  <Dropdown.Button css={{ visibility: 'visible', width: '100%', height: '45px', backgroundColor: 'black', border: '3px solid #262626'}}>
                    Select category
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    onSelectionChange={handleSelectionChange}
                  >
                    {categories.map((category) => (
                      <Dropdown.Item key={category.name}>{category.name}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Grid>
              
              <Grid lg={6} md={6} xs={12}>
              <Dropdown placement="bottom">
                  <Dropdown.Button css={{  width: '100%', height: '45px', backgroundColor: 'black', border: '3px solid #262626' }}>
                    Select subcategory
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    onSelectionChange={handleSelectionChange}
                  >
                    <Dropdown.Item key="Swap" description='Want to Swap this Item'>Swap</Dropdown.Item>
                    <Dropdown.Item key="Sell" description='Want to Sell this Item'>Sell</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Grid>

              <Grid lg={6} md={6} xs={12}>
                <Dropdown placement="bottom">
                  <Dropdown.Button css={{  width: '100%', height: '45px', backgroundColor: 'black', border: '3px solid #262626' }}>
                    Select subcategory
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    onSelectionChange={handleSelectionChange}
                  >
                    <Dropdown.Item key="Swap" description='Want to Swap this Item'>Swap</Dropdown.Item>
                    <Dropdown.Item key="Sell" description='Want to Sell this Item'>Sell</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Grid>

            </Grid.Container>
          </Grid>
          <Grid>
            <label style={{ marginLeft: '5px', fontSize: '14px'}}>Conditions</label>
            <Container css={{ padding: '0', margin: '0', "@smMax": { display: 'none' } }}>
              <Grid.Container css={{ padding: '0', margin: '0', marginTop: '$2' }} gap={0.7}>
                {conditionData.map((condition, index) => (
                  <Grid xs={2.4} key={index}>
                    <Card isPressable isHoverable onPress={() => setSelectionCondition(condition.title)} variant='bordered'
                      css={{
                        border: '2px solid',
                        backgroundColor: selectedCondition === condition.title ? '$secondarySolidHover' : 'inherit',
                        borderColor: selectedCondition === condition.title ? '$secondarySolidHover' : '$white'
                      }}>
                      <Text h5 color="white" css={{ mt: 10, mb: 1, textAlign: 'center' }}>
                        {condition.title}
                      </Text>
                      <Text h6 css={{ textAlign: 'center' }}>
                        {condition.description}
                      </Text>
                    </Card>
                  </Grid>
                ))}
              </Grid.Container>
            </Container>
            <Container css={{ width: '100%', marginLeft: '6px',"@lgMax":{display: 'none'}, "@smMax":{display: 'flex', padding: '$0'}}}>
              <Dropdown placement="bottom">
                  <Dropdown.Button css={{  width: '100%', height: '45px', backgroundColor: 'black', border: '3px solid #262626' }}>
                  { selectedCondition ? selectedCondition : "Select Item Conditions"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    onSelectionChange={(newSelected) => {
                      const selectedCondition = Array.from(newSelected)[0]; // Get the selected condition
                      setSelectionCondition(selectedCondition); // Update the selected condition in the state
                    }}
                  >
                    {conditionData.map((condition, index) => (
                      <Dropdown.Item key={condition.title} description={condition.shortDescription}>
                        {condition.title}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
            </Container>
          </Grid>
        </Container>
      </Container>
    </Container>
  )
}

export default List_New_Item