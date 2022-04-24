import React from 'react'

import '../css/ToDo.css'

export default function ToDo(props) {
    return (
        <span data-testid="ToDo">{props.content}</span>
    )
}
