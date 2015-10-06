//referencia al servidor de mongo
var coneccion = new Mongo("localhost");

//base de datos a usar
var db = coneccion.getDB("padron");

//limpiando la bd
db.dropDatabase();

// creando colecciones
db.createCollection("persona");
db.createCollection("direccion");

var conjDirecciones= [{
		_id: 1,
		pais: 'Bolivia',
		ciudad: 'La Paz'
	},{
		_id: 2,
		pais: 'Argentina',
		ciudad: 'Buenos aires'
	},{
		_id: 3,
		pais: 'Espania',
		ciudad: 'Valladolid'
	},{
		_id: 4,
		pais: 'Suiza',
		ciudad: 'Ginebra'
	}
]

db.persona.insert({
	_id: 100,
	nombre: 'isabel',
	apellido: 'blanco',
	genero: 'F',
	edad: 23,
	direcciones: [
		conjDirecciones[0],
		conjDirecciones[3]
	]
})

db.persona.insert({
	_id: 101,
	nombre: 'sandra',
	apellido: 'monasterios',
	genero: 'F',
	edad: 23,
	pasaporte: 2323,
	direcciones: [
		conjDirecciones[1],
		conjDirecciones[2]
	]
})

db.persona.insert({
	_id: 102,
	nombre: 'elizabeth',
	apellido: 'quispe',
	genero: 'F',
	edad: 34
})

db.persona.insert({
	_id: 103,
	nombre: 'cristhian',
	apellido: 'alvarado',
	genero: 'M',
	edad: 27,
	direcciones: [
		conjDirecciones[0],
		conjDirecciones[3]
	]
})

db.persona.insert({
	_id: 104,
	nombre: 'miguel',
	apellido: 'alcon',
	genero: 'M',
	edad: 27,
	direcciones: [
		conjDirecciones[1],
		conjDirecciones[2]
	]
})

db.persona.insert({
	_id: 105,
	nombre: 'eddy',
	apellido: 'huiza',
	genero: 'M',
	edad: 29,
	pasaporte: 2929
})

// insertando direcciones a la coleccion direccion desde el array conjDirecciones
conjDirecciones.forEach(function(valor, indice) {
	db.direccion.insert(valor)
});






