"use client"

import { Navbar, Button, Input } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import SearchIcon from './SearchIcon';
import { SwappifyLogo } from './SwappifyLogo';
import Link from "next/link";
import { useRouter } from 'next/router';
import AvatarComp from "./AvatarComp";
import { getSession, useSession } from 'next-auth/react';
import { ftruncateSync } from 'fs';
import NavbarItem from '@nextui-org/react/types/navbar/navbar-item';

const NavBar = () => { 
  const [searchQuery, setSearchQuery] = useState('');
  const [isActive, setIsActive] = useState('Home');
  const router = useRouter();
  const { data: session } = useSession();

  const navigateToSignUp = () => {
    router.push('/SignUp');
  }

  // useEffect(() => {
  //   const checkPage = () => {
  //     if (router.pathname === '/') {
  //       setIsActive('Home');
  //     } else if (router.pathname === '/Swapping') {
  //       setIsActive('Swapping');
  //     }else if (router.pathname === '/Buying') {
  //       setIsActive('Buying');
  //     }else if (router.pathname === '/ContactUs') {
  //       setIsActive('Contact Us');
  //     }
  //   }
  //   checkPage();
  // },[isActive, router])

    return (
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Navbar.Toggle showIn="sm" aria-label="toggle navigation" />
          <SwappifyLogo />
        </Navbar.Brand>
        <Navbar.Content hideIn="sm" variant="highlight">  
          <Navbar.Item
          variant="highlight-rounded"
            isActive={isActive === 'Home' ? true : false}
            activeColor="primary"
            css={{
              paddingTop: '$5'
          }}
          onClick={()=>setIsActive('Home')}
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
          variant="highlight-rounded"
            isActive={isActive === 'Swapping' ? true : false}
            activeColor="primary"
            css={{
              paddingTop: '$5'
            }}
            onClick={() => setIsActive('Swapping')}
          ><Link
                href={{
                  pathname: '/Swapping',
                }}
              >
                Swapping
            </Link>
          </Navbar.Item>
          <Navbar.Item
          variant="highlight-rounded"
            isActive={isActive === 'Buying' ? true : false}
            activeColor="primary"
              css={{
                paddingTop: '$5'
              }}
              onClick={() => setIsActive('Buying')}
          ><Link
                href={{
                  pathname: '/Buying',
                }}
              >
                Buying
              </Link></Navbar.Item>
          <Navbar.Item
          variant="highlight-rounded"
            isActive={isActive === 'Contact Us' ? true : false}
            activeColor="primary"
            css={{
              paddingTop: '$5'
            }}
            onClick={() => setIsActive('Contact Us')}
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
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              aria-labelledby="search-label"
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={18} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item>
          {session ? (<>
             <AvatarComp />
          </>) : (
            <>
            <Navbar.Item
            hideIn="xs"
          >
            <Link
            href={{
                  pathname: '/Login',
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
        <Navbar.Collapse>
          <Navbar.CollapseItem
          isActive={isActive === 'Home' ? true : false}
          activeColor="primary"
            css={{
              paddingTop: '$5'
          }}
            onClick={() => setIsActive('Home')}
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
          isActive={isActive === 'Swapping' ? true : false}
          activeColor="primary"
              css={{
                paddingTop: '$5'
              }}
              onClick={() => setIsActive('Swapping')}
          >
                <Link
                href={{
                  pathname: '/Swapping',
                }}
              >
                Swapping
              </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem
          isActive={isActive === 'Buying' ? true : false}
          activeColor="primary"
              css={{
                paddingTop: '$5'
              }}
              onClick={() => setIsActive('Buying')}
          >
                <Link
                href={{
                  pathname: '/Buying',
                }}
              >
                Buying
              </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem
            isActive={isActive === 'Contact Us' ? true : false}
            activeColor="primary"
            css={{
              paddingTop: '$5'
            }}
            onClick={() => setIsActive('Contact Us')}
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
      </Navbar>
    );
}

export default NavBar