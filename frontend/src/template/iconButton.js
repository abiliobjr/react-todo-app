import React from 'react'

export default props => {
    const isHide = props.hide
    if(props.hide) {
        return null
    } else {
        return (
            <div>
                {isHide ? (
                    ''
                ) : (
                    <button className={'btn btn-'+props.style} onClick={props.onClick}>
                        <i className={'fa fa-'+props.icon}></i>
                    </button>
                )}
            </div>
        )
    }
}