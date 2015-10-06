var coneccion = new Mongo("localhost");

//base de datos a usar
var db = coneccion.getDB("padron");

// muestra solo las personas de genero masculino
db.persona.find({genero: 'M'});

// mostrando a aquellas personas con edad mayor a 25 anios
db.persona.find( { edad: {$gt: 25} } );

// mostrar a personas de genero femenino que tengan 22 o menos anio
db.persona.find( { genero: 'F', edad: {$lte: 25} } );

// 4. - Mostrar a las personas hombre o mujeres que tengas mas de 25 anios
db.persona.find( { $or: [{genero: 'F'}, {genero: 'M'}], edad: {$gt: 25} } );

// 5 - Mostrar las personas que tengan pasaporte y ademas sean varones
db.persona.find( {genero: 'M', pasaporte: {$exists: true} } );

// 6 - Mostrar solo los nombres de los varones
db.persona.find( {genero: 'F'}, { nombre: 1} );


