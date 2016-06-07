require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    paths: {
        // vendor libs
        angular:       '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.6/angular',
        // angular: '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.6/angular.min'
        playerCtrl: 	'controllers/player',
        playerObj: 		'bin/player'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        playerCtrl: {
        	deps: ['angular', 'playerObj']
        }
    }
});

require(['angular'], function() {
    angular.module('myApp',[]).init = function() {
        angular.bootstrap(document, ['myApp']);
        console.log('Do awesome stuff!');
    };

    angular.module('myApp').init();
});
