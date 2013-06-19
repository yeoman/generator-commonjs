/*
 * <%= props.name %>
 * <%= props.homepage %>
 *
 * Copyright (c) <%= currentYear %> <%= props.authorName %>
 * Licensed under the <%= props.license %> license.
 */

(function(exports) {

  'use strict';

  exports.awesome = function() {
    return 'awesome';
  };

}(typeof exports === 'object' && exports || this));
