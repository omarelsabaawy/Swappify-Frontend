"use client"

import React from 'react';
import { Button, Divider, Input, Loading, Spacer, Text, Tooltip } from '@nextui-org/react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Logo from '../components/Logo';
import { UnLockIcon } from '../components/UnLockIcon';
import { LockIcon } from '../components/LockIcon';
import { useUserContext } from '../Context/UserContext';
import toast, {Toaster} from 'react-hot-toast';


const Login = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState<string | undefined>("");
  const [password, setPassword] = React.useState<string | undefined>("");
  const [loading, setLoading] = React.useState<Boolean | undefined>(false);
  const [requiredField, setRequiredField] = React.useState<Boolean | undefined>(false);

  const { setUserAndToken } = useUserContext();

  const handleBackButtonClick = () => {
    router.back();
  };

  const handleLogin = async () => {
    setLoading(true);

    if (!email || !password) {
      toast.error("Some Fields are required.", {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      setRequiredField(true);
      setLoading(false);
      return;
    }
    try {

      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (!passwordPattern.test(password)) {
        toast.error("Password is not strong enough. It must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.", {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
        setLoading(false);
        return;
      }

      const formData = {
        email: email,
        password: password,
      }

      const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      });
      
      const responseData = await response.json();

      if (response.ok) {

        const user = {
          id: responseData.id,
          email: responseData.email,
          location: responseData.location,
          phoneNumber: responseData.phoneNumber,
          avatar: responseData.email[0] + responseData.email[1],
          latitude: responseData.latitude,
          longitude: responseData.longitude
        };

        setUserAndToken(user, responseData.access_token);

        setLoading(false);
        
        router.push('/');

      } else {
        toast.error(responseData.message, {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
        setLoading(false);
        return;
      }

    } catch (error) {
      setLoading(false);
    }


  }
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Toaster position='bottom-right' />
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
        <h3 style={{ width: '100%', textAlign: 'center', marginBottom: '1rem' }}>
          Sign in with Swappify and Continue swapping your items
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
          marginBottom: '1.7rem'
        }}></h4>
        <Input
          clearable
          bordered
          type='email'
          value={email}
          aria-label="Email"
          onChange={(e)=>setEmail(e.target.value)}
          labelPlaceholder="Email"
          style={{
            width: '330px',
            backgroundColor: 'inherit'
          }}
          size='md'
          required
          color='secondary'
          status={(requiredField && !email) ? 'error' : 'default'}
          helperText={(requiredField && !email) ? 'Email is Required' : ''}
        />
        <Spacer y={1.6} />
        <Input.Password
          clearable
          bordered
          visibleIcon={<UnLockIcon fill="currentColor" />}
          hiddenIcon={<LockIcon fill="currentColor" />}
          type='password'
          value={password}
          aria-label="Password"
          onChange={(e)=>setPassword(e.target.value)}
          labelPlaceholder="Password"
          style={{
            width: '270px'
          }}
          size='md'
          required
          color='secondary'
          status={(requiredField && !password) ? 'error' : 'default'}
          helperText={(requiredField && !password) ? 'Password is Required' : ''}
        />
        <Spacer y={1} />
       <Button
          type='button'
          shadow 
          color="gradient"
          onPress={handleLogin}
        >
          {loading? (<Loading size='sm' color="white"></Loading>) : ("Login")}
        </Button>
        <Spacer y={0.7} />
        <Text>
          Do not have an Account? &nbsp;
          <span
            style={{
              color: '#b659d9'
            }}
          >
            <Link href={{
              pathname: '/SignUp'
            }}>
              Sign Up
            </Link>
          </span>
        </Text>
        <Spacer y={0.1} />
        <Text
          css={{
            textDecoration: "underline",
            color: "$primary"
          }}
        >
          <Link
              href={{
              pathname: '/ForgetPassword'
            }}
          >
              Forget Your Password?  
          </Link>  
        </Text>
        
      </>
    </div>
  );
};

export default Login;