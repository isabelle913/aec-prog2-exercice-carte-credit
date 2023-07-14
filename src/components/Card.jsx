import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Card = (props) => {

    function handleClick(){
        console.log('Miip')
        props.changeName()
    }
    function handleChange(event){
        event.preventDefault()
        // console.log('handleChange', event.target.value)
        props.changeName(event.target.value)
    }

    return (
        <>
        <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Nom</InputGroup.Text>
            <Form.Control
            aria-label='name'
            aria-describedby="inputGroup-sizing-sm" onChange={handleChange}
            />
        </InputGroup>
        <Button variant="success" onClick={handleClick}>Confirmer</Button>
        
        </>
        
    )
}

export default Card