<template>
	<div class="search-page">
		<div class="form-group">
			<label for="search-users">Search for users</label>
			<input type="text" id="search-users" class="form-control">
		</div>

		<ul class="list-group">
			<li
				v-for="user in userResults"
				:key="user.id"
				class="list-group-item"
			>
				<img :src="user.profilePhoto" width="50" height="50" class="profile-photo" />
				<h2 class="username">{{ user.name }}</h2>
				<!-- bio text, use flex and put this in a container w/ the username: -->
				<!-- <p>hey there</p> -->
			</li>
		</ul>
	</div>
</template>

<script>
import * as R from 'ramda';

export default {
	name: 'search-profile',
	data() {
		const users = [
			{ name: 'Bob Trufant', id: 1 },
			{ name: 'Jimbo', id: 2 },
		];

		return {
			userResults: R.map(R.assoc('profilePhoto', 'https://placekitten.com/100/100'), users),
		};
	},
};
</script>

<style scoped>
.search-page {
	margin: 0 auto;
	width: 500px;
}

.list-group-item {
	text-align: left;
	padding: 0;
}

.profile-photo {
	margin: 15px;
	margin-right: 10px;
}

.username {
	font-weight: normal;
	display: inline-block;
	margin: 15px 0;
	/* vertical-align: middle; */
	vertical-align: top;
	font-size: 1.2em;
}
</style>
