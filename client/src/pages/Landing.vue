<template>
	<div>
		<main>
			<div class="introduction">
				<div class="intro-text">
					<h1>Welcome to the <br> CEA connection page!</h1>
					
					<p>Sit lorem optio mollitia quis esse? Ex ut tempora quas vero sed nulla Corporis et hic esse maiores veritatis. Error maxime alias accusantium dolores consequatur Illum quibusdam voluptatum aspernatur sit unde cumque ea hic Odit commodi tempore quas error asperiores deserunt impedit? Perferendis voluptates saepe quasi eaque neque Hic corrupti</p>
				</div>
				<button>Join Today!</button>
			</div>
		</main>
		<div class="features">
			<div>
				<img src="https://via.placeholder.com/150x150" alt="Search">
				<h3>Seach</h3>
				<p>Search for future productions, directors, or other members.</p>
			</div>
			<div>
				<img src="https://via.placeholder.com/150x150" alt="Profile">
				<h3>Profile</h3>
				<p>Create your own profile. Show your hobbies, upload pictures, resumes, and more!</p>
			</div>
			<div>
				<img src="https://via.placeholder.com/150x150" alt="Calendar">
				<h3>Calendar</h3>
				<p>View our calendar for future productions and scheduling</p>
			</div>
			<div>
				<img src="https://via.placeholder.com/150x150" alt="Connect">
				<h3>Connect</h3>
				<p>Connect with other students, directors, producers, and crew members!</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'landing',
};
</script>

<style scoped>
main {
	background: url('https://cdn.nashvillepost.com/files/base/scomm/nvp/image/2018/04/16x9/640w/LIPSCOMB_Business_School_Rendering_1.5ad65c212986f.jpg') no-repeat center center;
	background-size: cover;
}

.introduction {
	padding: 150px 75px;
	width: 35%;
}

.intro-text {
	padding: 15px 20px;
	background-color: rgba(0, 0, 0, 0.3);
	color: white;
}

.introduction p {
	text-align: left;
	margin: 35px 0 20px;
}

.introduction button {
	border-radius: 20px;
	border: none;
	padding: 8px 20px;
	background-color: white;
	color: black;
	font-weight: bold;
	font-size: 1.2em;
	margin: 20px;
}

.features {
	display: flex;
	justify-content: space-evenly;
	padding: 100px 50px;
}

.features > div {
	flex: 0;
	flex-basis: 250px;
}

.features h3 {
	margin-top: 20px;
}
</style>
