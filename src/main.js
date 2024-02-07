

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';

import 'bootstrap/dist/css/bootstrap-grid.min.css'
// import 'bootstrap'
// import 'bootstrap-icons/font/bootstrap-icons.css'

import 'primevue/resources/themes/aura-light-green/theme.css'
import Button from "primevue/button"
import 'primeicons/primeicons.css'
import Menubar from 'primevue/menubar';




const app = createApp(App)

app.use(router)

app.use(PrimeVue);

app.component('Button', Button);
app.component('Menubar', Menubar);

app.mount('#app')