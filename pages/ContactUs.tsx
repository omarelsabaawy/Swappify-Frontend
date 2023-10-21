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

const ContactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [feedback, setFeedback] = useState("");
    const [loading, setLoading] = useState(false);

    const { setVisible, bindings } = useModal();

    const sendFeedBack = async () => {
        setLoading(true);
        setVisible(true);
        setLoading(false);
    }

    return (
        <Container css={{
            maxWidth: '100%',
            alignContent: 'center',
            textAlign: 'center',
            height: '95vh'
       }}>
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
            //   value={email}
            aria-label="Name"
            //   onChange={(e)=>setEmail(e.target.value)}
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
            //   status={(requiredField && !email) ? 'error' : 'default'}
            //   helperText={(requiredField && !email) ? 'Email is Required' : ''}
        />
        </div>
            <div>
                <Input
            clearable
            bordered
            type='email'
            //   value={email}
            aria-label="Email"
            //   onChange={(e)=>setEmail(e.target.value)}
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
            //   status={(requiredField && !email) ? 'error' : 'default'}
            //   helperText={(requiredField && !email) ? 'Email is Required' : ''}
        />
            </div>
            <div>
                <Input
            clearable
            bordered
            type='text'
            //   value={email}
            aria-label="Email"
            //   onChange={(e)=>setEmail(e.target.value)}
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
            //   status={(requiredField && !email) ? 'error' : 'default'}
            //   helperText={(requiredField && !email) ? 'Email is Required' : ''}
        />
            </div>
            <div>
                <Textarea
            id="message"
            rows={6}
            placeholder='Your Feedback'
            size='md'
            bordered
            color="secondary"
            css={{
                    width: '50%',
                "@smMax": {
                width: '90%'  
                },
                backgroundColor: 'inherit',
                marginTop: '$10'
            }}
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
        >
            <Modal.Header>
            <Text id="modal-title" color='success' size={20}>
                Your feedback was sent successfully
            </Text>
            </Modal.Header>
            <Modal.Body>
                <Input
                    type='email'
                    bordered
                    color='default'
                    labelLeft="From:"
                    value={email}
                    disabled
                />
                <Input
                    type='text'
                    bordered
                    color='default'
                    labelLeft="Subject:"
                    value={subject}
                    disabled
                />
                <Textarea
                    bordered
                    color='default'
                    value={feedback}
                    disabled
                />
            </Modal.Body>
            <Modal.Footer>
            <Button auto color="error" onPress={() => setVisible(false)}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </Container>
    );
};

export default ContactUs;