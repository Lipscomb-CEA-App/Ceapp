<template>
	<div>
		<main>
			<div class="introduction">
				<div class="intro-text">
					<h1>Our Productions</h1>
					
					<p>Sit lorem optio mollitia quis esse? Ex ut tempora quas vero sed nulla Corporis et hic esse maiores veritatis. Error maxime alias accusantium dolores consequatur Illum quibusdam voluptatum aspernatur sit unde cumque ea hic Odit commodi tempore quas error asperiores deserunt impedit? Perferendis voluptates saepe quasi eaque neque Hic corrupti</p>
				</div>
				<button>Search</button>
			</div>
		</main>
        <div>
            <h1 style="margin-top:5%;margin-bottom: 0%;">Featured Productions</h1>
        </div>
        <md-card>
      <md-card-media>
        <img src="/assets/examples/card-image-1.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Title goes here</div>
        <div class="md-subhead">Subtitle here</div>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
      </md-card-content>
    </md-card>
		<div class="features">
            
			<div>
				<img src="https://via.placeholder.com/150x150" alt="Profile">
				<h3>Profile</h3>
				<p>Create your own profile. Show your hobbies, upload pictures, resumes, and more!</p>
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
        <div class="features">
            <div>
				<img src="https://via.placeholder.com/150x150" alt="Profile">
				<h3>Profile</h3>
				<p>Create your own profile. Show your hobbies, upload pictures, resumes, and more!</p>
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
	background-image: url('https://via.placeholder.com/1024x960');
}

.introduction {
	padding: 10% 0%  10% 10% ;
	width: 100%;
}

.intro-text {
	margin-left: 10%;
    width:80%;
	color: rgb(0, 0, 0);
}

.intro-text p {
	margin-top: 5%;
	margin-left: 25%;
    width: 50%;
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
	margin-top: 5px;
}
.features p{
    width: 180px;
    margin-left: 10%;
}
</style>