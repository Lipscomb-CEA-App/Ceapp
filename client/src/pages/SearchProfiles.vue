<template>
	<div class="search-page">
		<div class="form-group">
			<label for="search-users">Find talent!</label>
			<input
				type="text"
				id="search-users"
				class="form-control"
				placeholder="Search by name or skills..."
				v-model="searchText"
			/>
		</div>

		<div v-if="filteredUsers.length">
			<ul class="list-group">
				<li
					v-for="user in filteredUsers"
					:key="user.id"
					class="list-group-item"
				>
					<img :src="user.profilePhoto" width="50" height="50" class="profile-photo" />
					<div class="about">
						<h2>{{ user.fullName }}</h2>
						<p>{{ user.bio }}</p>
					</div>
				</li>
			</ul>
		</div>
		<div v-else class="no-results">
			<p>No results found...</p>
			<p></p>
		</div>
	</div>
</template>

<script>
import * as R from 'ramda';
import Fuse from 'fuse.js';

export default {
	name: 'search-profile',
	data() {
		const users = [
			{
				fullName: 'Bob Trufant',
				bio: 'I am a businessman.',
				id: 1,
			},
			{
				fullName: 'Jimbo',
				bio: 'Junior, aspiring director',
				id: 2,
			},
			{
				fullName: 'Joe McJoe',
				bio: 'Joe mama',
				id: 3,
			},
		];

		const userResults = R.map(R.assoc('profilePhoto', 'https://placekitten.com/100/100'), users);

		return {
			userResults,
			userSearch: new Fuse(userResults, { keys: ['fullName', 'bio'], threshold: 0.4 }),
			searchText: '',
		};
	},
	computed: {
		// Eventually this'll be gone and the sever will do the filtering and just return the full list of users that the search returned. 
		// This means `userResults` will be used to show users instead of this, and the `fuse.js` dependancy shouldn't be needed anymore (unless we start using elsewhere).
		filteredUsers: function() {
			return this.userSearch.search(this.searchText.trim());
		},
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
	display: flex;
}

.profile-photo {
	margin: 15px;
	margin-right: 10px;
}

.about {
	font-weight: normal;
	margin: 15px 0;
	vertical-align: top;
}

.about h2 {
	font-size: 1.3em;
	margin-bottom: 2px;
}

.about p {
	margin: 0;
}

.no-results {
	background-color: #eee;
	border-radius: 0.25rem;
	padding: 12px;
}

.no-results p {
	margin: 12px 0;
}
</style>
