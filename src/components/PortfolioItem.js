import React from 'react'

export default function PortfolioItem(props) {
    return (
        <div>
            <h1 className="test">{props.project.projName}</h1>
            {/* <h1>{props.projName}</h1>
            <img className="thumbnail" src={.img} alt={data.alt} />
            <a href={data.deployedUrl} target="_blank" rel="noreferrer">Deployed Link</a>
            <a href={data.githubUrl} target="_blank" rel="noreferrer">Github Repo</a> */}
        </div>
    )
}