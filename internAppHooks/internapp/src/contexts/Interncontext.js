import {createContext, useEffect, useState} from "react";

export const Interncontext = createContext();

const InternContextProvider = (props) => {

    const [interns, setInterns] = useState([]);
    const [selectUser, setSelectUser] =useState(null)


    const getIntern = ()=> {
        fetch("http://localhost:5000/", {
        "method": "GET",
        headers: {
            "Content-Type":"application/json"
        }
        })
        .then(resp => resp.json())
        .then(resp => setInterns(resp))
        .catch(error => console.log(error))
    }
    
    useEffect(() => {
        getIntern()

    }, [])

    const addUser= (intern)=> {
        fetch("http://localhost:5000/", {
        "method": "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name: intern.name,
            surname: intern.surname,
            age: intern.age
        })
        })
        getIntern()
    }

    const deleteUser = async (id) => {
        await fetch(`http://localhost:5000/${id}`, {
            "method": "DELETE", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        getIntern()
        

    }

    const updateUser = async (intern, id) => {
        await fetch(`http://localhost:5000/${id}`, {
            "method": "PUT", 
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name: intern.name,
                surname: intern.surname,
                age: intern.age
            })
        })
        getIntern()
    }

    const getUser = (id) => {
        fetch(`http://localhost:5000/getOne/${id}`, {
            "method": "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(resp => {setSelectUser(resp)})
        
    }
    


    let service = {
        addUser: addUser,
        deleteUser: deleteUser,
        updateUser: updateUser,
        getUser: getUser
    }



    return(
        <Interncontext.Provider value={{interns, service, selectUser}}>
            {props.children}
        </Interncontext.Provider>
    )

}

export default InternContextProvider;
