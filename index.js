import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import fire from './config/fire';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot){
    module.hot.accept();    
}
