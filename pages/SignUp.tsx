"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Button, Divider, Input, Spacer, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import Link from "next/link";
import {getSession, signIn, useSession} from 'next-auth/react'

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [location, setLocation] = React.useState(""); // Add location state
  const { data: session } = useSession();

  if (session) {
    router.push('/');
  }

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
        {!session && (
          <button type='button' onClick={handleBackButtonClick} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginTop: '1rem', marginLeft: '1rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        )}
      </div>
      {/* {session ? (
        <>
          <h2 style={{
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>Continue Signing Up with Swappify</h2>
          <Spacer y={1} />
        <Input
          clearable
          bordered
          type='text'
          labelPlaceholder="Username"
          style={{
            width: '330px',
          }}
          size='md'
        />
        <Spacer y={1.6} />
        <Input
          clearable
          bordered
          type='text'
          labelPlaceholder="Home Address"
          style={{
            width: '330px'
          }}
          size='md'
        />
        <Spacer y={1.6} />
        <Button
          type='submit'
          shadow
          color="gradient"
          onClick={()=> router.push('/')}  
        >Continue</Button>
      </>
      ): ( */}
          <>
        <h1 style={{ fontSize: '4.5rem', marginBottom: '0.1rem', paddingRight: '1%' }}>Swappify</h1>
        <h3 style={{ width: '70%', textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
          Sign Up with Google and start swapping your products
        </h3>
        <Button
          className='googleButton'
          size="md"
              // onPress={()=> signIn('google')}
          disabled
        >
          <Image src="/images/google-logo-6278331_1280.webp" alt="Google Logo" height="20px" width="20px" style={{ margin: '10px' }} />
          <span style={{ marginLeft: '0.3rem', fontSize: '1rem' }}>Continue with Google</span>
        </Button>
        <Divider style={{ width: '25%', margin: '1rem' }} />
        <h4 style={{
          fontSize: '1.4rem',
          marginBottom: '1.5rem'
        }}>Or Sign Up with your Email</h4>
        <Input
          clearable
          bordered
          type='email'
          labelPlaceholder="Email"
          style={{
            width: '330px',
          }}
          size='md'
        />
        <Spacer y={1.6} />
        <Input
          clearable
          bordered
          type='password'
          labelPlaceholder="Password"
          style={{
            width: '330px'
          }}
          size='md'
        />
        <Spacer y={1.6} />
        <Input
          clearable
          bordered
          type='text'
          labelPlaceholder="Home Address"
          style={{
            width: '330px'
          }}
          size='md'
        />
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
