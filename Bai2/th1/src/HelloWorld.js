import React from "react";

export default function HelloWorld(){
    let name = 'Cee';
    const user = {
        firstName : 'Dự',
        lastName : 'Phạm Văn'
    };
    const formatName = (user) =>{
        return user.lastName + ' ' + user.firstName;
    }
    return (
        <div>
           <div>Xin chào {name } và {formatName(user)}</div>
            <div>Rất vui khi được gặp bạn hihi </div>
        </div>
    );
}