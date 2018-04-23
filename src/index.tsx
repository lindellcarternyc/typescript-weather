import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// Icon styles
import './assets/css/weather-icons-wind.css'
import './assets/css/weather-icons.css'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
