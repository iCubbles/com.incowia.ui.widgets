'use strict';
var path = require('path');
module.exports = function (grunt) {
  return {
    tasks: {
      'wct-test': {
        'side-nav': {
          options: {
            verbose: true,
            root: '<%= workspacePath %>/com.incowia.ui.widgets/side-nav',
            remote: false,
            plugins: {
              local: {
                browsers: [ 'chrome', 'firefox' ],
                options: { remote: false }
              }
            },
            registerHooks: function (wct) {
              // Configure proxy for

              var proxyMiddleware = require(grunt.config.get('devtoolsPath') +
                '/node_modules/http-proxy-middleware');

              // configure proxy middleware context

              // with this paths will be proxied
              var context = [ '**', '!/' + grunt.config.get('param.src') + '/**', '!/components/**' ];

              var remoteStoreUrl = grunt.config.get('workspaceConfig.remoteStoreUrl');
              var store = path.basename(remoteStoreUrl);
              // configure proxy middleware options
              var options = {
                target: 'https://cubbles.world',
                changeOrigin: true,
                pathRewrite: {
                  '^/': '/' + store + '/'
                },
                logLevel: 'error'
              };

              // create the proxy
              var proxy = proxyMiddleware(context, options);
              wct.hook('prepare:webserver', function (app, done) {
                app.use(proxy);
                done();
              });
            }
          }
        }
      }
    }
  };
};
