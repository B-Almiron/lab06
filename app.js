const express = require('express');
const app = express();



// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));


// Ruta para renderizar la plantilla Pug
app.get('/pug', (req, res) => {
  res.render('index', { nombre: 'Usuario Pug' });
});

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

// Ruta para renderizar la plantilla EJS
app.get('/ejs', (req, res) => {
  res.render('index.ejs', { nombre: 'Usuario EJS' });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});

app.get('/perfil/:id', (req, res) => {
    const userId = req.params.id;
    // Aquí puedes buscar los datos del usuario en una base de datos, por ejemplo
    const user = { id: userId, nombre: 'Usuario ' + userId };
    res.render('perfil', { user: user });
  });
  

// Ruta para renderizar la plantilla Pug
app.get('/miplantilla-pug', (req, res) => {
    const dat = { ape: 'ALMIRON', esp1: 'HTML/CSS', esp2: 'JAVASCRIPT', esp3: 'WORDPRESS', esp4: 'PYTHON', esp5: 'PHP',esp6: 'JAVA', cont1:"960-498-941",cont2:'bill.almiron@tecsup.edu.pe',cont3:'www.almiron.com'};
    res.render('miplantilla', { mensaje: dat});
  });
  
  // Ruta para renderizar la plantilla EJS
  app.get('/miplantilla-ejs', (req, res) => {
    res.render('miplantilla.ejs', { mensaje: '¡Hola desde la plantilla EJS!' });
  });
  
