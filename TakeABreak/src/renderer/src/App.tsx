import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Break from './pages/Break'

export function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/break" element={<Break />} />
    </Routes>
  )
}

export function WrappedApp(): JSX.Element {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}
