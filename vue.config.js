// 경로: 루트 디렉토리/vue.config.js
const path = require('path');
const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin');
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
	plugins:[
		new VueAutoRoutingPlugin({
			// Path to the directory that contains your page components.
			pages: 'src/pages',
			// A string that will be added to importing component path (default @/pages/).
			importPrefix: '@/pages/'
		})
	]
};
