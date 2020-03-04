import React, { Component, ErrorInfo } from 'react';

import { ErrorBoundaryMessage } from './ErrorBoundaryMessage';

interface ErrorBoundaryProps {
  readonly children: JSX.Element | JSX.Element[];
}

interface ErrorBoundaryState {
  readonly error: any;
  readonly errorInfo: any;
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  readonly state: ErrorBoundaryState = {
    error: undefined,
    errorInfo: undefined,
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV === 'development') {
      this.setState({ error, errorInfo });
      console.warn(error, errorInfo);
    }
  }

  render() {
    const { error, errorInfo, hasError } = this.state;
    return hasError ? (
      <ErrorBoundaryMessage
        message="An unexpected error has occurred."
        error={error}
        errorInfo={errorInfo}
      />
    ) : (
      this.props.children
    );
  }
}
