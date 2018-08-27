var _path = require("path");
var vue = require("vue");

module.exports = {
	entry: {
		vue: [
			"./dist/vue-components/intro.js",
		],
		bundle: [
			"./dist/script/custom-script.js"
		],
	},
    output: {
        path: _path.join(__dirname, "dist"),
        filename: "[name].app.js",
        publicPath: "/dist/"
    },
    externals: {},
	resolve: {
	    alias: {
	      'vue$': 'vue/dist/vue.esm.js'
	    },
        extensions: ['*', '.js', '.vue', '.json']
	},
    watch: true,
    mode: "development",
    module: {
    	rules: [ {
            test: /\.vue$/,
            use: 'vue-loader'
    	} ]
    }
}