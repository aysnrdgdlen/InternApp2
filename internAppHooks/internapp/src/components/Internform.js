import { Button, Form } from 'semantic-ui-react'
import {useState, useEffect,useContext} from "react";
import { Interncontext } from '../contexts/Interncontext';



let defaultIntern = {
  name: '',
  surname: '',
  age: '',
  id: 0
}

const Internform = () => {
  const contexts = useContext(Interncontext)

  const [intern, setIntern] = useState(defaultIntern);

  useEffect(() => {
    if(contexts.selectUser){
      setIntern(contexts.selectUser)
    }
  }, [contexts.selectUser])

  const onInputChange = (e) => {
    let _intern = { ...intern }
    _intern[e.target.id] = e.target.value
    setIntern(_intern)
  }
  

  const handleSubmit = (e) => {
    if (intern.id === 0) {
      e.preventDefault();
      var a = contexts
      contexts.service.addUser(intern)
    }
    else {
      var a = contexts
      contexts.service.updateUser(intern, intern._ID)
    }
    setIntern(defaultIntern)
  }





    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                id='name'
                label='Name'
                onChange={(e) => onInputChange(e)}
                value = {intern.name}
                placeholder='Name'
                type='text'
              />
              </Form.Group>
              <Form.Group widths="equal">
              <Form.Input
                fluid
                id='surname'
                label='Surname'
                onChange={(e) => onInputChange(e)}
                value = {intern.surname}
                placeholder='Surname'
                type='text'
              />
              </Form.Group>
              <Form.Group widths="equal">
              <Form.Input
                fluid
                id='age'
                label='Age'
                onChange={(e) => onInputChange(e)}
                value = {intern.age}
                placeholder='Age'
                type='number'
              />
            </Form.Group>
            <Button floated='right' color="green" type='submit'>Submit</Button>
          </Form>

    )

}
export default Internform;