import "fslightbox";

fsLightboxInstances['first-lightbox'].open(0);
fsLightboxInstances['second-lightbox'].props.onOpen = () => console.log('Lightbox open!');


/* import { suma,saludo } from './operaciones.js';
import Swal from 'sweetalert2';


document.write(`<h2>${suma(1,2)}</h2>`);
document.write(`<h2>${suma(11,22)}</h2>`);
document.write(`<h2>${suma(11,22)}</h2>`);

console.log(suma(1,2));
console.log(saludo);

    Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })

    Swal.fire({
    title: 'Oi!',
    text: 'Sheila Sánchez Ramírez',
    imageUrl: 'https://www.ttisuccessinsights.es/wp-content/uploads/2020/06/3811637.jpg',
    imageWidth: 400,
    imageHeight: 300,
    imageAlt: 'Custom image',
  })
 

import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component()); */