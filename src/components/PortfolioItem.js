import React from 'react'

export default function PortfolioItem(props) {
    return (
        <div class="row">
            <div class="col-sm-6">
                <div class="card" style={{ width: "18rem" }}>
                    <img src={props.project.img} alt={props.project.alt} />
                    <div class="card-body">
                        <h2 className="projectNameText">{props.project.projName}</h2>
                        <p>{props.project.projDesc}</p>
                        <a href={props.project.deployedUrl} target="_blank" rel="noreferrer">Deployed Link_</a>
                        <a href={props.project.githubUrl} target="_blank" rel="noreferrer">_Github Repo</a>
                    </div>
                </div>
                {/* <h2 className="test">{props.project.projName}</h2>
            <img src={props.project.img} alt={props.project.alt} />
            <a href={props.project.deployedUrl} target="_blank" rel="noreferrer">Deployed Link</a>
            <a href={props.project.githubUrl} target="_blank" rel="noreferrer">Github Repo</a> */}
                {/* <h1>{props.projName}</h1>
            <img className="thumbnail" src={.img} alt={data.alt} />
            <a href={data.deployedUrl} target="_blank" rel="noreferrer">Deployed Link</a>
            <a href={data.githubUrl} target="_blank" rel="noreferrer">Github Repo</a> */}
            </div>
        </div>
    )
}