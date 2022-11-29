import Intern from "./Intern"
import {Table} from 'semantic-ui-react'
import {useContext} from "react";
import {Interncontext} from "../contexts/Interncontext"

const InternList = () => {
    var a = useContext(Interncontext)
    
    const {interns} = useContext(Interncontext)



    return (
        <>
            <Table celled color = {"grey"} inverted>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Surname</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    <Intern interns={interns}  />


                </Table.Body>

            </Table>
            
        </>
    )

}
export default InternList;