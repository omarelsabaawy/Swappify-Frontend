import { Navbar, Button, Input } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import SearchIcon from './SearchIcon';
import { SwappifyLogo } from './SwappifyLogo';
import Link from "next/link";
import { useRouter } from 'next/router';
import AvatarComp from "./AvatarComp";
import { getSession, useSession } from 'next-auth/react';



const NavBar = () => { 
  const [searchQuery, setSearchQuery] = useState('');
  const [isActive, setIsActive] = useState('Home');
  const router = useRouter();
  const { data: session } = useSession();

  const navigateToSignUp = () => {
    router.push('/SignUp');
  }

    return (
        <Navbar isBordered variant="floating">
        <SwappifyLogo />
        <Navbar.Content hideIn="xs" variant="highlight">  
          <Navbar.Item
            isActive={isActive === 'Home' ? true : false}
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
            isActive={isActive === 'Swapping' ? true : false}
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
              </Link></Navbar.Item>
          <Navbar.Item
            isActive={isActive === 'Buying' ? true : false}
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
            isActive={isActive === 'Contact Us' ? true : false}
            css={{
              paddingTop: '$5'
            }}
            onClick={() => setIsActive('Contact Us')}
          ><Link
                href={{
                  pathname: '/ContactUs',
                }}
              >
                Contact Us
              </Link></Navbar.Item>
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
                "@xsMax": {
                  mw: "300px",
                },
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
            <Button auto flat onClick={navigateToSignUp}>
              Sign Up
            </Button>
        </Navbar.Item>
      </>
          )}
          

        </Navbar.Content>
      </Navbar>
    );
}

export default NavBar