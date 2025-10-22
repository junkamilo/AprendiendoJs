import { Card } from './card';
import { JsonPlacerholder } from './jsonPlaceholder/jsonPlaceholder-app';
import './style.css'
//seleccioamos el elemento principal
const app = document.getElementById("app");

const dataPost = await JsonPlacerholder();
const cardPost = Card(dataPost);

app.append(cardPost);


