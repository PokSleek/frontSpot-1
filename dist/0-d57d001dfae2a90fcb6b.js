(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/ErrorHandler/ErrorHandler.js":
/*!******************************************!*\
  !*** ./src/ErrorHandler/ErrorHandler.js ***!
  \******************************************/
/*! exports provided: ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony import */ var _components_baseComponents_Item_Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/baseComponents/Item/Item */ "./src/components/baseComponents/Item/Item.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var ErrorHandler = function ErrorHandler() {
  var _this = this;

  _classCallCheck(this, ErrorHandler);

  this.addError = function (err) {
    _this.log = [err].concat(_toConsumableArray(_this.log));
    return _this;
  };

  this.logErrors = function () {
    return _this.log.forEach(function (error) {
      return console.log(error);
    });
  };

  this.getLastError = function () {
    return _this.log[0];
  };

  this.showLastError = function () {
    _this.container = new _components_baseComponents_Item_Item__WEBPACK_IMPORTED_MODULE_0__["default"]('div');

    _this.container.addClass('error__container');

    _this.container.setInnerText(_this.getLastError());

    return _this.container;
  };

  if (!ErrorHandler.instance) {
    this.log = [];
    ErrorHandler.instance = this;
  }

  return ErrorHandler.instance;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3JIYW5kbGVyL0Vycm9ySGFuZGxlci5qcyJdLCJuYW1lcyI6WyJFcnJvckhhbmRsZXIiLCJhZGRFcnJvciIsImVyciIsImxvZyIsImxvZ0Vycm9ycyIsImZvckVhY2giLCJlcnJvciIsImNvbnNvbGUiLCJnZXRMYXN0RXJyb3IiLCJzaG93TGFzdEVycm9yIiwiY29udGFpbmVyIiwiSXRlbSIsImFkZENsYXNzIiwic2V0SW5uZXJUZXh0IiwiaW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFiLEdBQ0ksd0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxPQVNkQyxRQVRjLEdBU0gsVUFBQUMsR0FBRyxFQUFJO0FBQ2QsU0FBSSxDQUFDQyxHQUFMLElBQVlELEdBQVosNEJBQW9CLEtBQUksQ0FBQ0MsR0FBekI7QUFDQSxXQUFPLEtBQVA7QUFDSCxHQVphOztBQUFBLE9BY2RDLFNBZGMsR0FjRjtBQUFBLFdBQU0sS0FBSSxDQUFDRCxHQUFMLENBQVNFLE9BQVQsQ0FBaUIsVUFBQUMsS0FBSztBQUFBLGFBQUlDLE9BQU8sQ0FBQ0osR0FBUixDQUFZRyxLQUFaLENBQUo7QUFBQSxLQUF0QixDQUFOO0FBQUEsR0FkRTs7QUFBQSxPQWdCZEUsWUFoQmMsR0FnQkM7QUFBQSxXQUFNLEtBQUksQ0FBQ0wsR0FBTCxDQUFTLENBQVQsQ0FBTjtBQUFBLEdBaEJEOztBQUFBLE9Ba0JkTSxhQWxCYyxHQWtCRSxZQUFNO0FBQ2xCLFNBQUksQ0FBQ0MsU0FBTCxHQUFpQixJQUFJQyw0RUFBSixDQUFTLEtBQVQsQ0FBakI7O0FBQ0EsU0FBSSxDQUFDRCxTQUFMLENBQWVFLFFBQWYsQ0FBd0Isa0JBQXhCOztBQUNBLFNBQUksQ0FBQ0YsU0FBTCxDQUFlRyxZQUFmLENBQTRCLEtBQUksQ0FBQ0wsWUFBTCxFQUE1Qjs7QUFDQSxXQUFPLEtBQUksQ0FBQ0UsU0FBWjtBQUNILEdBdkJhOztBQUNWLE1BQUksQ0FBQ1YsWUFBWSxDQUFDYyxRQUFsQixFQUE0QjtBQUN4QixTQUFLWCxHQUFMLEdBQVcsRUFBWDtBQUNBSCxnQkFBWSxDQUFDYyxRQUFiLEdBQXdCLElBQXhCO0FBQ0g7O0FBRUQsU0FBT2QsWUFBWSxDQUFDYyxRQUFwQjtBQUNILENBUkwsQyIsImZpbGUiOiIwLWQ1N2QwMDFkZmFlMmE5MGZjYjZiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlQ29tcG9uZW50cy9JdGVtL0l0ZW0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVycm9ySGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoIUVycm9ySGFuZGxlci5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZyA9IFtdO1xyXG4gICAgICAgICAgICBFcnJvckhhbmRsZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEVycm9ySGFuZGxlci5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRFcnJvciA9IGVyciA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2cgPSBbZXJyLCAuLi50aGlzLmxvZ107XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nRXJyb3JzID0gKCkgPT4gdGhpcy5sb2cuZm9yRWFjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG5cclxuICAgIGdldExhc3RFcnJvciA9ICgpID0+IHRoaXMubG9nWzBdO1xyXG5cclxuICAgIHNob3dMYXN0RXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgSXRlbSgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoJ2Vycm9yX19jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRJbm5lclRleHQodGhpcy5nZXRMYXN0RXJyb3IoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=