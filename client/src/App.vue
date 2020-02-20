<template>
	<div id="app">
		<site-header />
		<router-view />
	</div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';

export default {
	name: 'app',
	components: {
		SiteHeader,
	},
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 0;
}
</style>
