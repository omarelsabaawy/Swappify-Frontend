import {
    Container,
    Text,
    Input,
    Textarea,
    Button,
    Modal,
    useModal,
    Loading,
} from '@nextui-org/react';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import CircularProgress from '@mui/material/CircularProgress';


const ContactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);
    const [requiredField, setRequiredField] = useState(false);

    const { setVisible, bindings } = useModal();

    const sendFeedBack = async () => {
        setLoading(true);

        if (!email || !name || !subject || !body) {
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
                const formData = {
                    email,
                    name,
                    subject,
                    body
                }

                const response = await fetch('/api/feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                
                if (response.ok) {
                    setVisible(true);
                    setLoading(false);
                    setRequiredField(false);
                    setBody("");
                    setEmail("");
                    setName("");
                    setSubject("");
                    return;
                } else {
                    toast.error("Error while sharing your feedback.", {
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
            
            } catch (error) {
                setLoading(false);
            }
    }

    return (
        <Container css={{
            maxWidth: '100%',
            alignContent: 'center',
            textAlign: 'center',
            height: '95vh'
        }}>
            <Toaster position='bottom-right' />
        <Text h2 css={{
            textAlign: 'center',
            marginBottom: '$6',
            marginTop: '$6'
        }}>
            How can we help you?
        </Text>
            <Text css={{
                textAlign: 'center',
                marginBottom: '$6',
                marginTop: '$6',
                fontSize: '$lg',
            }}>
            Got a technical issue? Want to send feedback about Swappify? Need details about Swappify? Let us know.
        </Text>
            <div>
            <Input
            clearable
            bordered
            type='text'
            value={name}
            aria-label="Name"
            onChange={(e)=>setName(e.target.value)}
            labelLeft="Name"
            size='md'
            color='secondary'
            
            css={{
                width: '50%',
                "@smMax": {
                    width: '90%'  
                },
                backgroundColor: 'inherit',
                marginTop: '$8'
            }}
            required
            status={(requiredField && !name) ? 'error' : 'default'}
            helperText={(requiredField && !name) ? 'Name is Required' : ''}
        />
        </div>
            <div>
            <Input
            clearable
            bordered
            type='email'
            value={email}
            aria-label="Email"
            onChange={(e)=>setEmail(e.target.value)}
            labelLeft="Email"
            size='md'
            color='secondary'
            
            css={{
                width: '50%',
                "@smMax": {
                  width: '90%'  
                },
                backgroundColor: 'inherit',
                marginTop: '$10'
            }}
            required
            status={(requiredField && !email) ? 'error' : 'default'}
            helperText={(requiredField && !email) ? 'Email is Required' : ''}
        />
            </div>
            <div>
                <Input
            clearable
            bordered
            type='text'
            value={subject}
            aria-label="subject"
            onChange={(e)=>setSubject(e.target.value)}
            labelLeft="Subject"
            size='md'
            color='secondary'
            
            css={{
                width: '50%',
                "@smMax": {
                  width: '90%'  
                },
                backgroundColor: 'inherit',
                marginTop: '$10'
            }}
            required
            status={(requiredField && !subject) ? 'error' : 'default'}
            helperText={(requiredField && !subject) ? 'Subject is Required' : ''}
        />
            </div>
            <div>
            <Textarea
            id="message"
            rows={6}
            placeholder='Your Feedback'
            size='md'
            bordered
            value={body}
            onChange={(e)=>setBody(e.target.value)}

            color="secondary"
            css={{
                    width: '50%',
                "@smMax": {
                width: '90%'  
                },
                backgroundColor: 'inherit',
                marginTop: '$10'
            }}
            status={(requiredField && ! body) ? 'error' : 'default'}
            helperText={(requiredField && ! body) ? 'Body is Required' : ''}
        />
        </div>
        <Button
            type="submit"
            rounded
            color='default'
            css={{
                marginLeft: '25%',
                marginTop: '$8',
                "@smMax": {
                    marginLeft: '5%'
                }
            }}
            onPress={sendFeedBack}
            >
            {loading ? (<Loading size='sm' color="white" type='points'></Loading>) : ('Send message')}
        </Button>
        
        <Modal
            scroll
            css={{
                width: '100%' ,
            }}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
                {...bindings}
                closeButton
        >
            <Modal.Header>
            <Text id="modal-title" color='success' size={20}>
                Your feedback was sent successfully
            </Text>
                </Modal.Header>
                <Modal.Footer>

                </Modal.Footer>
        </Modal>
        </Container>
    );
};

export default ContactUs;