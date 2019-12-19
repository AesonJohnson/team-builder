import React, { useState, useEffect } from "react";

const Form = props => {

    const [person, setPerson] = useState({
        name: "",
        email: "",
        role: ""
    });

    useEffect(() => {
        setMember(props.Member);
    }, [props.Member])

    return (
        <div>
            <p>{Form.name}</p>
            <p>{Form.email}</p>
            <p>{Form.role}</p>
        </div>
    );
}

export default Form;