"use client"

import { Navbar, Button, Input, Modal, Tooltip } from '@nextui-org/react';
import React, { useState } from 'react';
import SearchIcon from './SearchIcon';
import { SwappifyLogo } from './SwappifyLogo';
import Link from "next/link";
import { useRouter } from 'next/router';
import AvatarComp from "./AvatarComp";
import { useUserContext } from '../../Context/UserContext';
import { BsSearch } from 'react-icons/bs';


const NavBar = () => { 
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const { user } = useUserContext();

  const [visible, setVisible] = useState(false);

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const navigateToSignUp = () => {
    router.push('/Auth/SignUp');
  }

  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Navbar.Toggle showIn="sm" aria-label="toggle navigation" />
        <SwappifyLogo />
      </Navbar.Brand>
      <Navbar.Content hideIn="sm" variant="highlight">  
        <Navbar.Item
          css={{
            paddingTop: '$5'
        }}
        >
          <Link
              href={{
                pathname: '/',
              }}
            >
              Home
            </Link>
          </Navbar.Item>
        <Navbar.Item
          css={{
            paddingTop: '$5'
          }}
        ><Link
              href={{
                pathname: '/Shop/Swap',
              }}
            >
              Swapping
          </Link>
        </Navbar.Item>
        <Navbar.Item
            css={{
              paddingTop: '$5'
            }}
        ><Link
              href={{
                pathname: '/Shop/Buy',
              }}
            >
              Buying
            </Link></Navbar.Item>
        <Navbar.Item
          css={{
            paddingTop: '$5'
          }}
        >
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
      <Navbar.Collapse css={{backgroundColor: 'black'}}>
        <Navbar.CollapseItem
          css={{
            paddingTop: '$5'
        }} 
        >
              <Link
              href={{
                pathname: '/',
              }}
            >
              Home
            </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem
            css={{
              paddingTop: '$5'
            }}
        >
              <Link
              href={{
                pathname: '/Shop/Swap',
              }}
            >
              Swapping
            </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem
            css={{
              paddingTop: '$5'
            }}    
        >
              <Link
              href={{
                pathname: '/Shop/Buy',
              }}
            >
              Buying
            </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem
          css={{
            paddingTop: '$5'
          }}
        >
              <Link
              href={{
                pathname: '/ContactUs',
              }}
            >
              Contact Us
          </Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>

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

    </Navbar>
  );
}

export default NavBar