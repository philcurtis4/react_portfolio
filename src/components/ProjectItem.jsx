function ProjectItem (props) {
	const imageObj = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${props.data.image})`
	}

	return (
		<>
			<a href={props.data.url} target="_blank">
				<article className="work-item" style={imageObj}>
					<h4>{props.data.title}</h4>
					<p>{props.data.description}</p>
					<p className="technologies">{props.data.technologies}</p>
				</article>
			</a>
		</>
	)
}

export default ProjectItem