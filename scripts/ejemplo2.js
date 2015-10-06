var coneccion = new Mongo("localhost");

//base de datos a usar
var db = coneccion.getDB("padron");

	
db.persona.find({genero: 'M', direcciones: {$exists: true}}).forEach(function(p) {
	print("----"+ p.nombre +"----");
	var direccionesLatinoamerica= p.direcciones.filter(function(dir, ind) {
		switch(dir.pais){
			case 'Bolivia':
			case 'Argentina':
			case 'Peru':
			case 'Chile':
				return true;
			default:
				return false;
		}
	})

	direccionesLatinoamerica.forEach(function(dirLat) {
		print(dirLat.pais);
	})
})

