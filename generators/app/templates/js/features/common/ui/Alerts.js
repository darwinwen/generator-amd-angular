/**
 *  Defines the Alerts
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define(['lib/FeatureBase', 'angular'], function(FeatureBase, angular) {

    var element = angular.element;

    var TYPES = {
        warning: 'warning',
        error: 'error',
        info: 'info',
        success: 'success'
    };

    var TIMEOUTS = {
        warning: 3000,
        error: 5000,
        info: 3000,
        success: 3000
    };

    var TITLES = {
        warning: 'Warning',
        error: 'Error',
        info: 'Info',
        success: 'Success'
    };

    class Feature extends FeatureBase {
        constructor() {
            super('Alerts');
            this.$body = element(document.body);
        }

        beforeStart() {
            this.$body.append('<sweetnotifier></sweetnotifier>');
        };

        alertEvent(events, notifier) {
            events.on('alert', function(data) {
                notifier.emit({
                    type: TYPES[data.type],
                    title: TITLES[data.type],
                    content: data.message,
                    timeout: TIMEOUTS[data.type]
                });
            });
        }

        execute() {
            this.alertEvent.$inject = ['events', 'notifier'];
            this.run(this.alertEvent);
        }
    }

    return Feature;

});
