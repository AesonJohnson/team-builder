import React, { useState, useEffect } from "react";
import Form from "./Member"

const MemberList = props => {
    return (
        <div>
            {props.member.map(person => (
                <p>{person.name}</p>
                <p>{person.email}</p>
                <p>{person.role}</p>
            ))}
        </div>
    );
}

export default MemberList;