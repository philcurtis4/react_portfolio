import ProjectItem from "../components/ProjectItem";

const apps = [
	{
		title: 'Weather App',
		description: 'A cool weather application I made that lets you search by city to get the local weather',
		image: '/images/weatherApp.jpg',
		technologies: 'HTML | CSS | JS | DayJS',
		url: "https://github.com/philcurtis4/weather_dashboard_6"
	},
	{
		title: 'Tech Blog',
		description: 'A full stack blog application with authentication',
		image: '/images/techBlog.jpg',
		technologies: 'HTML | CSS | JS | DayJS | Express | Postgres | Sequelize | Sessions',
		url: "https://tech-blog-14-mbqa.onrender.com/"
	},
	{
		title: 'Before You Kick the Bucket',
		description: 'A full stack application with authentication for users to search locations by city and a specific landmark they would like to see.',
		image: '/images/BucketListApp.jpg',
		technologies: 'HTML | CSS | JS | Express | Postgres | Sequelize | Sessions',
		url: "https://before-you-kick-the-bucket.onrender.com/"
	},
	{
		title: 'Blog App',
		description: 'An app that allows a user to post blogs and view other blogs as well',
		image: '/images/BlogApp.jpg',
		technologies: 'HTML | CSS | JS ',
		url: "https://github.com/philcurtis4/blog_website_4"
	},
	{
		title: 'Task Board',
		description: 'A An application to organize tasks needed to be completed',
		image: '/images/TaskBoard.jpg',
		technologies: 'HTML | CSS | JS ',
		url: "https://github.com/philcurtis4/task_manager_5"
	},
	{
		title: 'Employee Manager',
		description: 'A node app that allows the user to create a database of employees',
		image: '/images/BucketListApp.jpg',
		technologies: 'JS | Express | Postgres | Sequelize',
		url: "https://github.com/philcurtis4/employee_manager_app_12"
	}

]



function Portfolio () {
	//Loop over the apps array and convert each object into a <WorkItem /> component tag
	const workItems = apps.map((projectItemObj, index) => {
		return <ProjectItem key={index} data={projectItemObj} />
	});

	return (
		<>
			

			<section className="work">
				{workItems}
				
			</section>
			
		</>
	)
}

export default Portfolio