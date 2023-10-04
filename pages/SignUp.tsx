"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Avatar, Button, Divider, Input, Spacer, Text, Tooltip } from '@nextui-org/react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Logo from '../components/Logo';

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState<string | undefined>();
  const [password, setPassword] = React.useState<string | undefined>();
  const [location, setLocation] = React.useState<string | undefined>();
  const [phoneNumber, setPhoneNumber] = React.useState<string | undefined>();
  const [avatar, setAvatar] = React.useState<string | null>(null);
  

  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '110vh' }}>
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
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
          <>
        <Logo />
        <h3 style={{ width: '70%', textAlign: 'center', marginTop: '1rem', marginBottom: '0.3rem' }}>
          {/* Sign Up with Google and start swapping your products */}
          Sign Up with Swappify and start swapping your Items
        </h3>
        {/* <Tooltip content={"Sorry Google Sign Up not working now."} rounded color="secondary" placement='right'>
          <Button
          className='googleButton'
          size="md"
              // onPress={()=> signIn('google')}
          disabled
        >
          <Image src="/images/google-logo-6278331_1280.webp" alt="Google Logo" height="20px" width="20px" style={{ margin: '10px' }} />
          <span style={{ marginLeft: '0.3rem', fontSize: '1rem' }}>Continue with Google</span>
        </Button>
        </Tooltip> */}
        <Divider style={{ width: '50%', margin: '1rem' }} />
        <h4 style={{
          fontSize: '1.4rem',
          marginBottom: '1rem'
        }}></h4>
        <Input
          clearable
          bordered
          type='email'
          value={email}
          labelPlaceholder="Email"
          style={{
            width: '330px',
          }}
          size='md'
          required
        />
        <Spacer y={1.6} />
        <Input
          clearable
          bordered
          type='password'
          value={password}
          labelPlaceholder="Password"
          style={{
            width: '330px'
          }}
          size='md'
          required
        />
        <Spacer y={1.6} />
        <Input
          clearable
          bordered
          type='tel'
          placeholder="Phone Number"
          value={phoneNumber}
          labelLeft="+1"
          style={{
            width: '300px'
          }}
          size='md'
          required
        />
        <Spacer y={1.6} />
        <Input
          clearable
          bordered
          type='text'
          labelPlaceholder="Home Address"
          value={location}
          style={{
            width: '330px'
          }}
          size='md'
          required
        />
        <Spacer y={1.6} />
        <Input
          clearable
          bordered
          type="file"
          labelPlaceholder="Upload a Photo: (Max file size: 4MB)"
          width='350px'
          size="md"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          style={{
            color: 'white',
            display: 'none'
          }}
        />
        {avatar && <p>Image Uploaded.</p>}
        <Spacer y={1} />
        <Button
          type='submit'
          shadow
          color="gradient"
        >Sign Up</Button>
        <Spacer y={0.7} />
        <Text>
          Have an Account? &nbsp;
          <span
            style={{
              color: '#b659d9'
            }}
          >
            <Link href={{
              pathname: '/Login'
            }}>
              Login
            </Link>
          </span>
        </Text>
      </>
      {/* )} */}
      
    </div>
  );
};

export default SignUp;
