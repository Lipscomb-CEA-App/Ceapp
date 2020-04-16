import * as R from 'ramda';
import Fuse from 'fuse.js';

const userData = [
	{
		fullName: 'Bob Trufant',
		bio: 'I am a businessman.',
	},
	{
		fullName: 'Jimbo',
		bio: 'Junior, aspiring director',
	},
	{
		fullName: 'Joe McJoe',
		bio: 'Joe mama',
	},
];

const users = R.addIndex(R.map)((user, i) => {
	return R.compose(
			R.assoc('profilePhoto', 'https://placekitten.com/200/200'),
			R.assoc('id', i + 1),
	)(user);
}, userData);

const userSearcher = new Fuse(users, { keys: ['fullName', 'bio'], threshold: 0.4 });

function searchForUsers(text) {
	return userSearcher.search(text);
}

function findUserById(id) {
	return R.find(R.propEq('id', parseInt(id, 10)), users);
}

export { searchForUsers, findUserById };
