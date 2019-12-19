import React, { useState, useEffect } from "react";

const Form = props => {
    const [member, setMember] = useState({});
    
    useEffect(() => {
        setMember(props.member);
    }, [props.member])

    return (
        <div>
            {props.member.map(person => (
                <div>
                    <p>{person.name}</p>
                    <p>{person.email}</p>
                    <p>{person.role}</p>
                </div>
            ))}
        </div>
    );
}

export default Form;