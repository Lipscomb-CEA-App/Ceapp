<template>
	<div>
		<img :src="user.profilePhoto" alt="profile photo">
		<h2>{{ user.fullName }}</h2>
		<p>{{ user.bio }}</p>
	</div>
</template>

<script>
import { findUserById } from '../api/user.js';

export default {
	name: 'profile',
	data() {
		return {
			user: {},
		};
	},
	created() {
		this.user = findUserById(this.$route.params.id) || {};
	},
};
</script>

<style scoped>
</style>
