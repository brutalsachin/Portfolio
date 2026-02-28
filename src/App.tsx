import { Component, type ReactNode } from 'react'
import Portfolio from './Portfolio3D.jsx'

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null }
  static getDerivedStateFromError(error: Error) { return { error } }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24, color: '#fff', fontFamily: 'monospace', background: '#090d13', minHeight: '100vh' }}>
          <h1>Something went wrong</h1>
          <pre style={{ color: '#e74c3c' }}>{this.state.error.message}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Portfolio />
    </ErrorBoundary>
  )
}

export default App