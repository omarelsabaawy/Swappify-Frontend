"use client"

import React from 'react';
import { Button, Divider, Input, Loading, Progress, Spacer, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Logo from '../../components/Logo';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { UnLockIcon } from '../../components/UnLockIcon';
import { LockIcon } from '../../components/LockIcon';
import { useUserContext } from '../../Context/UserContext';
import toast, {Toaster} from 'react-hot-toast';


const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState<string | undefined>("");
  const [password, setPassword] = React.useState<string | undefined>("");
  const [location, setLocation] = React.useState<string | undefined>("");
  const [coordinates, setCoordinates] = React.useState<{ latitude?: number, longitude?: number }>({});
  const [phoneNumber, setPhoneNumber] = React.useState<string | undefined>("");
  const [loading, setLoading] = React.useState<Boolean | undefined>(false);
  
  const [requiredField, setRequiredField] = React.useState<Boolean | undefined>(false);
  
  const { setUserAndToken } = useUserContext();
  
  const handleBackButtonClick = () => {
    router.back();
  };

  const handleSelect = async (value: any) => {
    const results = await geocodeByAddress(value);
    const latitudeLongitude = await getLatLng(results[0]);
    const { lat: latitude, lng: longitude } = latitudeLongitude;
    setLocation(value);
    setCoordinates({ latitude, longitude });
  }

  const handleSignUp = async () => {
    setLoading(true);

    if (!email || !password || !location || !phoneNumber) {
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

  // Verify password strength
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

  // Validate US phone number format
  const phoneNumberPattern = /^(?:\d{10}|\d{3}[- ]\d{3}[- ]\d{4}|\(\d{3}\)[- ]\d{3}[- ]\d{4})$/;
  if (!phoneNumberPattern.test(phoneNumber)) {
    toast.error("Invalid US phone number format. Please enter a valid US phone number.", {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
    setLoading(false);
    return;
  }
    
    try {
      const formData = {
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        location: location,
        longitude: coordinates.longitude,
        latitude: coordinates.latitude,
        avatar: email ? email[0] + email[1] : ""
      }

      const response = await fetch('/api/register', {
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
        left: '0.5%',
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
        <h3 style={{ width: '100%', textAlign: 'center', marginBottom: '0.3rem' }}>
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
        <Divider css={{ 
          width: '50%', margin: '1rem',
         }} />
        <h4 style={{
          fontSize: '1.4rem',
          marginBottom: '1rem'
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
        <Spacer y={1.6} />
        <Input
          clearable
          bordered
          type='tel'
          placeholder="Phone Number"
          aria-label="Phone Number"
          onChange={(e)=>setPhoneNumber(e.target.value)}
          value={phoneNumber}
          labelLeft="+1"
          style={{
            width: '300px'
          }}
          size='md'
          required
          color='secondary'
          status={(requiredField && !phoneNumber) ? 'error' : 'default'}
          helperText={(requiredField && !phoneNumber) ? 'Phone number is Required' : ''}
        />
        <Spacer y={1.6} />
        <PlacesAutocomplete
        value={location || ''}
        onChange={setLocation}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Input
              clearable
                bordered
                aria-label="Home Address"
              labelPlaceholder="Home Address"
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
              style={{
                width: '330px'
              }}
              size='md'
                required
                color='secondary'
                status={(requiredField && !location) ? 'error' : 'default'}
                helperText={(requiredField && !location) ? 'Location is Required' : ''}
            />
            <div className="autocomplete-dropdown-container" style={{
              width: '350px',
              position: 'static',
            }}>
              {loading && <Loading size='sm' color="default" css={{ marginTop: '1rem'}}></Loading>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#007BFF', cursor: 'pointer' }
                  : { backgroundColor: '#000000', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                    key={suggestion.description}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
        <Spacer y={1} />
          <Button
          type='button'
          shadow 
          color="gradient"
          onPress={handleSignUp}
        >
          {loading? (<Loading size='sm' color="white"></Loading>) : ("Sign Up")}
        </Button>
        <Spacer y={0.7} />
        <Text>
          Have an Account? &nbsp;
          <span
            style={{
              color: '#b659d9'
            }}
          >
            <Link href={{
              pathname: '/Auth/Login'
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
