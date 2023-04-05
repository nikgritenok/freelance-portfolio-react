import Header from './.././components/header/Header.js'

const Home = () => {
	return (
		<>
			<Header />

			<main class='section'>
				<div class='container'>
					<ul class='content-list'>
						<li class='content-list__item'>
							<h2 class='title-2'>Frontend</h2>
							<p>
								JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
								BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
							</p>
						</li>
						<li class='content-list__item'>
							<h2 class='title-2'>Backend</h2>
							<p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}

export default Home
