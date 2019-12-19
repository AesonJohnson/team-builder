import React, { useState, useEffect } from "react";
import Form from "./Form"

const MemberList = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    useEffect(() => {
        setMember(props.member);
    }, [props.member])

    return (
        <div>

        </div>
    );
}

export default MemberList;