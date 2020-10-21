import React from 'react'

type welcomeProps = {
    data: number,
    name: string
}
export default function Welcome(props: welcomeProps) {
    return (
        <div>
            <span>Data:&nbsp;{props.data}</span>
            <br />
            <span>Name:&nbsp;{props.name}</span>
        </div>
    )
}
