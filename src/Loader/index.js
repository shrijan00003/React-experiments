import React from 'react'

import './index.css'

export default function Loader(props) {
    return (
        <React.Fragment>
        <div class="Loader">
            <div class="Spinner" />
            <div class="Message">
                loading...
            </div>
        </div>
        </React.Fragment>
    )
}
