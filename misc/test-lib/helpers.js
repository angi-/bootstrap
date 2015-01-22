// jasmine matcher for expecting an element to have a css class
// https://github.com/angular/angular.js/blob/master/test/matchers.js
beforeEach(function() {
  this.addMatchers({
    toHaveClass: function(cls) {
      this.message = function() {
        return "Expected '" + this.actual + "'" + (this.isNot ? ' not ' : ' ') + "to have class '" + cls + "'.";
      };

      return this.actual.hasClass(cls);
    },
    toBeHidden: function () {
      var element = angular.element(this.actual);
      return element.hasClass('ng-hide') ||
        element.css('display') == 'none';
    },
    toHaveFocus: function() {
      this.message = function() {
        return "Expected '" + angular.mock.dump(this.actual) + "' to have focus";
      };
      return document.activeElement === this.actual[0];
    },
    toNotHaveFocus: function() {
      this.message = function() {
        return "Expected '" + angular.mock.dump(this.actual) + "' to not have focus";
      };
      return document.activeElement !== this.actual[0];
    }
  });
});
