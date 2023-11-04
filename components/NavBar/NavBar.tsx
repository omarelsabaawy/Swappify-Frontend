"use client"

import { Navbar, Button, Input, Modal, Tooltip, Text } from '@nextui-org/react';
import React, { useState } from 'react';
import SearchIcon from './SearchIcon';
import { SwappifyLogo } from './SwappifyLogo';
import Link from "next/link";
import { useRouter } from 'next/router';
import AvatarComp from "./AvatarComp";
import { useUserContext } from '../../Context/UserContext';
import { BsSearch } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';

// Import the MUI components for the drawer
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { FormControl, InputLabel, ListItemButton, ListItemText, MenuItem, Select } from '@mui/material';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

const NavBar = () => { 
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const { user } = useUserContext();

  const [visible, setVisible] = useState(false);

  const handler = () => setVisible(true);

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [zIndexForDrawer, setZIndexForDrawer] = useState("$max");
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
    if (zIndexForDrawer === "$max") {
      setZIndexForDrawer("$1");
    }else{
      setZIndexForDrawer("$max");
    }
  };

  const closeHandler = () => {
    setVisible(false);
  };

  const navigateToSignUp = () => {
    router.push('/Auth/SignUp');
  }

  return (
    <Navbar css={{zIndex: zIndexForDrawer}} isBordered variant="static">
      <Navbar.Brand>
        <Button onClick={toggleDrawer} auto size={'sm'} style={{ backgroundColor: 'transparent', paddingLeft: '2px', paddingRight: '2px' }} className="menu-button">
          <RxHamburgerMenu size={20} />
        </Button>
        <SwappifyLogo />
      </Navbar.Brand>
      <Navbar.Content hideIn="sm" variant="default">  
        <Navbar.Item>
          <Link
              href={{
                pathname: '/',
              }}
            >
              Home
            </Link>
          </Navbar.Item>
        <Navbar.Item>
          <Link
              href={{
                pathname: '/Shop/Swap',
              }}
            >
              Swapping
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link
              href={{
                pathname: '/Shop/Buy',
              }}
            >
              Buying
            </Link></Navbar.Item>
        <Navbar.Item>
          <Link
              href={{
                pathname: '/ContactUs',
              }}
            >
              Contact Us
          </Link>
        </Navbar.Item>
        </Navbar.Content>
      <Navbar.Content
        css={{
          "@xsMax": {
            w: "100%",
            jc: "end",
          },
        }}
      >
        {user ? (
          <>
            <Tooltip css={{zIndex: "$max"}} content={"Search a product."} rounded color="secondary" placement='bottom'>
                <button style={{
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                  cursor: 'pointer'
                }}
                  onClick={handler}
                >
                  <BsSearch size={21}/>
                </button>
              </Tooltip>
            <AvatarComp />
          </>
        ): (
            <>
              <Tooltip content={"Search a product."} rounded color="secondary" placement='bottom'>
                <button style={{
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                  cursor: 'pointer'
                }}
                  onClick={handler}
                >
                  <BsSearch size={21}/>
                </button>
              </Tooltip>
            <Navbar.Item
              hideIn="xs"
            >
              <Link
              href={{
                    pathname: '/Auth/Login',
                  }}>
                Login
              </Link>
            </Navbar.Item>
            <Navbar.Item
            >
              <Button auto ghost color="gradient" onClick={navigateToSignUp}>
                Sign Up
              </Button>
            </Navbar.Item>
          </>
          )}
      </Navbar.Content>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Body>
          <Input
            clearable
            underlined
            aria-labelledby="search-label"
            contentLeft={
              <SearchIcon fill="var(--nextui-colors-accents6)" size={24} />
            }
            contentLeftStyling={false}
            css={{
              w: "100%",
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                mr: "$5",
                dflex: "center",
              },
            }}
            placeholder="Search..."
            size='xl'
          />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250, height: 1000, backgroundColor: 'whitesmoke'}}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <ListItem sx={{paddingLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0}}>
              <SwappifyLogo />
            </ListItem>
          </List>
          <Divider />
          <List>
          <ListItem >
              <ListItemButton sx={{
                '&:hover': {
                  backgroundColor: '#240c3c71',
                },
                borderRadius: '1rem'
              }} onClick={() => { router.push('/') }}>
                <Text css={{ color: 'Black', fontWeight: 'bold'}}>Home</Text>
            </ListItemButton>
            </ListItem>
            <Divider />
          <ListItem >
            <ListItemButton sx={{
                '&:hover': {
                  backgroundColor: '#240c3c71',
                },
                borderRadius: '1rem'
              }} onClick={() => { router.push('/Shop/Swap') }}>
              <Text css={{ color: 'Black', fontWeight: 'bold'}}>Swapping</Text>
            </ListItemButton>
            </ListItem>
            <Divider />
          <ListItem >
            <ListItemButton sx={{
                '&:hover': {
                  backgroundColor: '#240c3c71',
                },
                borderRadius: '1rem'
              }} onClick={()=>{router.push('/Shop/Buy')}}>
              <ListItemText>
                <Text css={{ color: 'Black', fontWeight: 'bold'}}>Buying</Text>
              </ListItemText>
            </ListItemButton>
            </ListItem>
            <Divider />
          <ListItem >
            <ListItemButton sx={{
                '&:hover': {
                  backgroundColor: '#240c3c71',
                },
                borderRadius: '1rem'
              }} onClick={() => { router.push('/ContactUs') }}>
              <Text css={{ color: 'Black', fontWeight: 'bold'}}>Contact Us</Text>
            </ListItemButton>
            </ListItem>
            <Divider />
        </List>
        </Box>
      </Drawer>
    </Navbar>
  );
}

export default NavBar