import React from 'react'


const ProfilesLists = (props) => {

    const renderInfo = props.infos.map((info) => {
        return(
            <div>
                <div>{info.first}</div>
                <div>{info.last}</div>
                <div>{info.email}</div>
                <div>{info.clas}</div>                
            </div>
        )
    })
    return (
        <div>
            {renderInfo}
        </div>
    )
}

export default ProfilesLists
