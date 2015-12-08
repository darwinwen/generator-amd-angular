/**
 *  SSOConfig set authorised configuration.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define(['lib/ConfiguratorBase'], function(ConfiguratorBase) {

    class Configurator extends ConfiguratorBase {
        constructor(features, app) {
            super(features, app);
        }

        httpConfig($httpProvider) {
            $httpProvider.defaults.headers.common.Accept = 'application/json;charset=utf-8';
            $httpProvider.defaults.withCredentials = true;
        }

        execute() {
            this.httpConfig.$inject = ['$httpProvider'];
            this.config(this.httpConfig);
        }
    }

    return Configurator;

});
