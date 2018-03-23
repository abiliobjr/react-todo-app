import React from 'react'

export default props => {
    const isHide = props.hide
    if(props.hide){
        return null
    }
    return (
        <button className={'btn btn-'+props.style} onClick={props.onClick}>
            <i className={'fa fa-'+props.icon}></i>
        </button>
    )
}