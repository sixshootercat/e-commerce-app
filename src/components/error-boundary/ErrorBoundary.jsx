import React, { Component } from 'react';
import { ErrorMessage } from './styles';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, _info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorMessage>
          <h1>There's been an error</h1>
        </ErrorMessage>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
