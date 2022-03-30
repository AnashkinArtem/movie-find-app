import React, { Component, ErrorInfo, ReactNode } from "react";
import styles from './styles.module.scss'

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
           <div className={styles.err}>
              <h1>Sorry... Your movie not found</h1>
              <h2>Reload the page</h2>
              <h4>Back</h4>
              <a href="http://localhost:9000/" className={styles.err__back}>
               </a>
           </div>

        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;