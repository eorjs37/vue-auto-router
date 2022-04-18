// 경로: 루트 디렉토리/vue.config.js
const path = require('path');
// eslint-disable-next-line no-undef
module.exports = {
	lintOnSave: false,
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src/'),
			},
		},
	},
};
