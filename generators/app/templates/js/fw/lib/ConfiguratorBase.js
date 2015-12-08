/**
 *  ConfiguratorBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define([], function() {

    class ConfiguratorBase {

        constructor(features, app) {
            this.features = features;
            this.app = app;

            this.config = app.config;
            this.constant = app.constant;
            this.value = app.value;
        }

        execute() {}
    }

    return ConfiguratorBase;
});
