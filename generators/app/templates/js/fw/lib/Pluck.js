/**
 *  Gets the property value of path from all elements in collection.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
define(['angular'], function(angular) {

    var isArray = angular.isArray;

    var pluck = function(arr, key) {
        if (!isArray(arr) || arr.length === 0) {
            return [];
        }
        if (!key) {
            return arr;
        }
        return arr.map(function(a) {
            return a[key];
        });
    };

    return pluck;
});
