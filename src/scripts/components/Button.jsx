/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons'),
    Router = require('react-router'),
    Link = React.createFactory(Router.Link),
    classSet = React.addons.classSet;

var Button = React.createClass({

  getDefaultProps: function () {
    return {
      buttonClass: 'button',
      buttonState: '',
      buttonColor: 'blue',
      buttonType: 'button',
      routeTo: null
    };
  },

  getButtonClasses: function () {
    var classes = {};

    classes[this.props.buttonClass] = true;

    var buttonState = this.props.buttonState;
    if (buttonState) {
      classes[buttonState] = true;
    }

    var buttonColor = this.props.buttonColor;
    if (this.props.buttonColor) {
      classes[buttonColor] = true;
    }

    return classes;
  },

  render: function () {
    var renderFuncName,
        classes = this.getButtonClasses();

    return (
      this.props.routeTo ? this.renderLink(classes)
                         : this.props.href ? this.renderAnchor(classes)
                                           : this.renderButton(classes));
  },

  renderLink: function (classes) {
    return <Link
        className={classSet(classes)}
        to={this.props.routeTo}>
        {this.props.children}
      </Link>;
  },

  renderButton: function (classes) {
    return (
      <button
        type={this.props.buttonType}
        className={classSet(classes)}>
        {this.props.children}
      </button>
    );
  },

  renderAnchor: function (classes) {
    var href = this.props.href || '#';

    return <a
        href={href}
        className={classSet(classes)}>
        {this.props.children}
      </a>;
  }

});

module.exports = Button;