/**
 *  AppConfig is the configuration of the whole application, in case
 *  you have different stuff for each env
 *
 *
 *  @author  Howard.Zuo
 *  @date    Apr 28th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['tpl!etc/config.json'], function(tpl) {

        var Configurator = function(features, app) {
            this.config = JSON.parse(tpl());
            this.features = features;
            this.app = app;
        };

        Configurator.prototype.run = function() {
            this.app.constant('CONF', this.config);
        };

        return Configurator;

    });

}(define));
