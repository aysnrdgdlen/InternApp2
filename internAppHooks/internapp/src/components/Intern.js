import { Button, Table} from 'semantic-ui-react'
import {useContext} from "react";
import { Interncontext } from '../contexts/Interncontext';





const Intern = ({interns}) =>{
    const contexts = useContext(Interncontext);

    const handleDelete = (id) => {
        var a = contexts;
        contexts.service.deleteUser(id)
    }

    const getUser = (id) => {
        var a = contexts;
        contexts.service.getUser(id); 
    };


 
    return (
        <>
            {
                interns.map((intern) => (

                    <Table.Row key={intern._ID}>
                        <Table.Cell>{intern.name}</Table.Cell>
                        <Table.Cell>{intern.surname}</Table.Cell>
                        <Table.Cell>{intern.age}</Table.Cell>
                        <td>
                            <Button onClick={() => getUser(intern._ID)} content='Update' primary />
                            <Button onClick={() => handleDelete(intern._ID)} content='Delete' secondary />
                        </td>
                    </Table.Row>

                ))
            }
            
        </>

    )

}
export default Intern;