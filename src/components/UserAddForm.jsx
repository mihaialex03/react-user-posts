import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export function UserAddForm(props){
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
    function handleFormSubmit(event){
        // prevenim comportamentul default al formularului
        event.preventDefault();
        // imi creez un nou obiect de user pe baza valorilor de state: name,email
        const newUser = {
            name,
            email
        };
        // apelez functia primita ca prop de la parinte ca sa setez noul user
        addUser(newUser);

    }
    return(
    <Form className='mb-3' onSubmit={handleFormSubmit}>
        <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder='Ex: Popescu Ion'value={name} onChange={handleNameChange}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email:</Form.Label>
            <Form.Control placeholder='Ex: info@itschool.ro' type='email'value={email} onChange={handleEmailChange}/>
        </Form.Group>
        <Button variant='light' type='submit'>
            Submit
        </Button>
    </Form>
);
}
