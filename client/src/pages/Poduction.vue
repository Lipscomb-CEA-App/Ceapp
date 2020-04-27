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
        

		<div class="features">
            
			<div>
				<img src="https://via.placeholder.com/150x150" alt="Profile">
				<h1 style="font-size: 25px;">Lorem ipsum</h1>
				<p style="font-size: 15px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
			</div>
			<div>
				<img src="https://via.placeholder.com/150x150" alt="Profile">
				<h3 style="font-size: 25px;">Lorem ipsum</h3>
				<p style="font-size: 15px;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div>
				<img src="https://via.placeholder.com/150x150" alt="Calendar">
				<h3 style="font-size: 25px;">Lorem ipsum</h3>
				<p style="font-size: 15px;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div>
				<img src="https://via.placeholder.com/150x150" alt="Connect">
				<h3 style="font-size: 25px;">Lorem ipsum</h3>
				<p style="font-size: 15px;" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
		</div>
        <div class="features">
            <div>
				<img src="https://via.placeholder.com/150x150" alt="Profile">
				<h3 style="font-size: 25px;">Lorem ipsum</h3>
				<p style="font-size: 15px;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div>
				<img src="https://via.placeholder.com/150x150" alt="Profile">
				<h3 style="font-size: 25px;">Lorem ipsum</h3>
				<p style="font-size: 15px;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div>
				<img src="https://via.placeholder.com/150x150" alt="Calendar">
				<h3 style="font-size: 25px;">Lorem ipsum</h3>
				<p style="font-size: 15px;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div>
				<img src="https://via.placeholder.com/150x150" alt="Connect">
				<h3 style="font-size: 25px;">Lorem ipsum</h3>
				<p style="font-size: 15px;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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