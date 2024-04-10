import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export function UserAddForm(props) {
    // incepem sa utilizam componenta de form din react boostrap
    // ne punem pe state valoarea pt name si email
    const {addUser} = props;
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    // preiau valorile din inputuri si le pun pe state
    function handleNameChange(event){
        const nameValue = event.target.value;
        setName(nameValue);
    }
    function handleEmailChange(event){
        const emailValue = event.target.value;
        setEmail(emailValue);
    }

    //noile input-uri
    function handleUsernameChange(event) {
        const value = event.target.value;
        setUsername(value);
    }
    function handlePhoneChange(event) {
    const value = event.target.value;
    setPhone(value);
    }

    //resetarea
    function handleFormReset() {
        setName('');
        setEmail('');
        setUsername('');
        setPhone('');
      };


    function handleFormSubmit(event){
        // prevenim comportamentul default al formularului
        event.preventDefault();
        // imi creez un nou obiect de user pe baza valorilor de state: name,email
        const newUser = {
            name,
            email,
            username,
            phone,
        };
        // apelez functia primita ca prop de la parinte ca sa setez noul user
        addUser(newUser);
    }

    return(
    <Form className='mb-3' onSubmit={handleFormSubmit}>
        <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Name:</Form.Label>
            <Form.Control placeholder='Ex: Popescu Ion'value={name} onChange={handleNameChange}/>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email:</Form.Label>
            <Form.Control placeholder='Ex: ion@itschool.ro' type='email'value={email} onChange={handleEmailChange}/>
        </Form.Group>


        <Form.Group className='mb-3' controlId='formBasicUsername'>
            <Form.Label>Username:</Form.Label>
            <Form.Control placeholder='Ex: Ion2018' type='username'value={username} onChange={handleUsernameChange}/>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPhone'>
            <Form.Label>Phone:</Form.Label>
            <Form.Control placeholder='Ex: 0723456778' type='phone'value={phone} onChange={handlePhoneChange}/>
        </Form.Group>



        <Button variant='light' type='submit'>
            Submit
        </Button>


        <Button onclick={handleFormReset} variant="danger">
            Reset
        </Button>


    </Form>
    );
}
