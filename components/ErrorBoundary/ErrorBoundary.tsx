import React, { Component, ReactNode } from "react";
import { View, Text } from "react-native";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.log("Error: ", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Unexpected error, please reboot your app</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
