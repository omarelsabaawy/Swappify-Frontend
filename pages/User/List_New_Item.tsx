import React, { useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Card, Container, Dropdown, Grid, Input, Row, Spacer, Text, Textarea } from '@nextui-org/react'
import { useRouter } from 'next/router';
import TopLogo from './TopLogo';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { TagsInput } from "@enipx/react-tags-input";

import categoriesData from './Categories.json';
import colorsData from './Colors.json';
import conditionsData from './Conditions.json';
import brandsData from "./Brands.json";

const thumbsContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
  alignContent: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center'
};

const thumb: React.CSSProperties = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #444', // Dark border color
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
  backgroundColor: '#222', // Dark background color
  position: 'relative',
};

const thumbInner: React.CSSProperties = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img: React.CSSProperties = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

const closeBtn: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  backgroundColor: 'red',
  color: 'white',
  borderRadius: '50%',
  width: '20px',
  height: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
};

const dropzoneContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '250px', // Adjust the height as needed
  border: '3px solid #262626', // Dashed purple border
  borderRadius: '1rem',
  cursor: 'pointer',
  alignContent: 'center',
  justifyItems: 'center',
  alignSelf: 'center',
  textAlign: 'center'
};

function List_New_Item() {

  const router = useRouter();
  
  const [files, setFiles] = useState<any[]>([]);
  const [hashTags, setHashTags] = useState<any[]>([]);
  const [selected, setSelected] = useState("Swap");
  const [selectedCondition, setSelectionCondition] = useState<any>("");
  const [selectColor, setSelectColor] = useState<any>("");
  const [category, setCategory] = useState<any>("");
  const [subCategory, setSubCategory] = useState<any>("");
  const [showSubCategory, setShowSubCategory] = useState<boolean>(false);
  const [showSubSubCategory, setShowSubSubCategory] = useState<boolean>(false);
  const [subSubCategory, setSubSubCategory] = useState<any>("");
  const [subCategories, setSubCategories] = useState<any>([]);
  const [subSubCategories, setSubSubCategories] = useState<any>([]);
  const [brand, setBrand] = useState<any>("");
  let CategoryBrands: string[] = [];

  const handleBackButtonClick = () => {
    router.back();
  };

  const handleSelectionChange = (newSelection: any) => {
    setSelected(newSelection.values().next().value);
  };

  const handleCategoryChange = (newSelection: any) => {
    const selectedCategory = Array.from(newSelection)[0];
    const selectedCategoryObject = categories.find((category) => category.category === selectedCategory);

    setCategory(selectedCategory);
    setSubCategory(""); // Reset the subcategory when the category changes
    setSubSubCategory(""); // Reset the subsubcategory when the category changes
    setSubCategories(selectedCategoryObject?.subCategories || []);
    setShowSubCategory(selectedCategory !== "Others" ? true : false);
    setSubSubCategories([]); // Reset the subsubcategories when the category changes
  };

  const handleSubCategoryChange = (newSelection: any) => {
    const selectedSubCategory = Array.from(newSelection)[0];
    const selectedSubCategoryObject = subCategories.find((subCategory: any) => subCategory.name === selectedSubCategory);
    setSubCategory(selectedSubCategory);
    setShowSubSubCategory(true);
    setSubSubCategory(""); // Reset the subsubcategory when the subcategory changes
    setSubSubCategories(selectedSubCategoryObject?.subCategories || []); // Change to subCategories
  };

  const handleSubSubCategoryChange = (newSelection: any) => {
    const selectedSubSubCategory = Array.from(newSelection)[0];
    setSubSubCategory(selectedSubSubCategory);
  };

  const conditions = conditionsData.conditions;
  const categories = categoriesData.categories;
  const colors = colorsData.colors;
  const brands = brandsData.brands;

  if (category !== "") {
    const filterBrands = brands.filter((brand) => brand.Category === category);
    CategoryBrands = filterBrands[0]?.brands || []; // Assign value inside the block
  }


  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: (acceptedFiles: any[]) => {
      if (files.length + acceptedFiles.length > 5) {
        // You can display a message or alert the user that they have reached the limit
        alert('Maximum images allowed are 5.');
      } else {
        setFiles((prevFiles) => [
          ...prevFiles,
          ...acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })),
        ]);
      }
    },
});


  const removeFile = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const thumbs = files.map((file, index) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img 
          src={file.preview}
          style={img}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt={file.name}
        />
      </div>
      <div style={closeBtn} onClick={() => removeFile(index)}>
        X
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data URIs to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Function to trigger the input click event
  const triggerInputClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Container css={{height: "1400px",maxWidth: '100%', margin: 0, padding: 0, marginBottom: '5%',}}>
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
                {selected}
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
          <section className="container">
            <div style={dropzoneContainer} {...getRootProps()}>
              {/* Use the inputRef to get a reference to the input element */}
              <input type='file' accept='image/*' {...getInputProps()} ref={inputRef} />
              <Button
                auto
                color={'secondary'}
                css={{borderRadius: '$sm'}}
                onClick={triggerInputClick} // Trigger the click event on button click
              >
                Upload photos
              </Button>
              <Spacer y={0.5} />
              <Text color='secondary'>Or drag and drop up to 5 photos</Text>
            </div>
            <aside style={thumbsContainer}>{thumbs}</aside>
          </section>
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
                  <Dropdown.Button css={{ visibility: 'visible', width: '100%', height: '45px', backgroundColor: 'transparent', border: '3px solid #262626'}}>
                    {category ? `${category}` : "Select category"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={category}
                    onSelectionChange={handleCategoryChange}
                  >
                    {categories.map((category) => (
                      <Dropdown.Item key={category.category}>{category.category}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Grid>
              
              {showSubCategory && (
                <Grid lg={6} md={6} xs={12}>
                <Dropdown placement="bottom">
                  <Dropdown.Button css={{ width: '100%', height: '45px', backgroundColor: 'transparent', border: '3px solid #262626' }}>
                    {subCategory ? `${subCategory}` : "Select subcategory"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={subCategory}
                    onSelectionChange={handleSubCategoryChange}
                  >
                    {subCategories.map((subCategory: any) => (
                      <Dropdown.Item key={subCategory.name}>{subCategory.name}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Grid>
              )}

              {showSubSubCategory && (
                <Grid lg={6} md={6} xs={12}>
                <Dropdown placement="bottom">
                  <Dropdown.Button css={{ width: '100%', height: '45px', backgroundColor: 'transparent', border: '3px solid #262626' }}>
                    {subSubCategory ? `${subSubCategory}` : "Select subsubcategory"}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={subSubCategory}
                    onSelectionChange={handleSubSubCategoryChange}
                  >
                    {subSubCategories.map((subSubCategory: any) => (
                      <Dropdown.Item key={subSubCategory}>{subSubCategory}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Grid>
              )}

            </Grid.Container>
          </Grid>
          <Grid>
            <label style={{ marginLeft: '5px', fontSize: '14px'}}>Conditions</label>
            <Container css={{ padding: '0', margin: '0', "@smMax": { display: 'none' } }}>
              <Grid.Container css={{ padding: '0', margin: '0', marginTop: '$2' }} gap={0.7}>
                {conditions.map((condition, index) => (
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
                  <Dropdown.Button css={{  width: '100%', height: '45px', backgroundColor: 'transparent', border: '3px solid #262626' }}>
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
                    {conditions.map((condition, index) => (
                      <Dropdown.Item key={condition.title} description={condition.shortDescription}>
                        {condition.title}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
            </Container>
          </Grid>
          <Spacer />
          <Grid>
            <label style={{ marginLeft: '5px', fontSize: '14px' }}>Color </label>
            <Dropdown placement="bottom">
              <Dropdown.Button
                css={{ width: '100%', height: '45px', backgroundColor: selectColor ? `${selectColor}` : "black" , border: '3px solid #262626', marginTop: "$3" }}
              >
                {!selectColor ? "Select the item Color" : selectColor}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Color selection"
                disallowEmptySelection
                selectionMode="single"
                onSelectionChange={(newSelected) => {
                  const selectedColor = Array.from(newSelected)[0]; // Get the selected condition
                  setSelectColor(selectedColor); // Update the selected condition in the state
                }}
              >
                {colors.map((color) => (
                 <Dropdown.Item key={color.name}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>{color.name}</div>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: color.hex,
                        marginLeft: '10px',
                      }}
                    ></div>
                  </div>
                </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
          <Spacer />
          <Grid>
            {category !== "Others" ?
              (
                <>
                  <label style={{ marginLeft: '5px', fontSize: '14px' }}>Brand </label>
                  <Dropdown placement="bottom">
                    <Dropdown.Button
                      css={{ width: '100%', height: '45px', backgroundColor: "transparent" ,border: '3px solid #262626', marginTop: "$3" }}
                    >
                      {!brand ? "Select the Brand" : brand}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      aria-label="Brand selection"
                      disallowEmptySelection
                      selectionMode="single"
                      onSelectionChange={(newSelected) => {
                        const selectedBrand = Array.from(newSelected)[0]; // Get the selected condition
                        setBrand(selectedBrand); // Update the selected condition in the state
                      }}
                    >
                      {CategoryBrands.map((brand) => (
                        <Dropdown.Item key={brand}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div>{brand}</div>
                          </div>
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <>
                  <Input
                    label="Brand"
                    borderWeight='bold'
                    aria-label='Brand'
                    placeholder="What is the item's brand?"
                    maxLength={80}
                    fullWidth
                    bordered
                    clearable
                  />
                </>
              )}
          </Grid>
          <Spacer />
          <Grid>
            <Container css={{ display: 'flex', justifyContent: 'center' }}>
              <Button shadow color={"secondary"} css={{width:"50%", textTransform: "capitalize"}}>Add the item</Button>
            </Container>
          </Grid>
        </Container>
      </Container>
    </Container>
  )
}

export default List_New_Item