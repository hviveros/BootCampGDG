var i = 0;
for (i; i < 5 ;i++) {
	console.log("Ejec... nro: ", i);
}

var txt = "";
var person = {fname:"John", lname:"Doe", age:25}
var x; //atributo // indice
for (x in person){
	//console.log(x);
	//txt += person[atributo] + " ";
	console.log(person[x] + " ");
}

var posts = [
	{
		titulo: "Programación en Javascript",
		texto: "texto de ejemplo 1 texto de ejemplo 1 texto de ejemplo 1 texto de ejemplo 1",
	},
	{
		titulo: "Intro a Linux",
		texto: "texto de ejemplo 2 texto de ejemplo 2 texto de ejemplo 2 texto de ejemplo 2",	
	},
	{
		titulo: "Usen Windows pirata",
		texto: "texto de ejemplo 3 texto de ejemplo 3 texto de ejemplo 3 texto de ejemplo 3",
	}
]

posts.map(function(post){
	console.log(post);
	var titulo = post.titulo;
	console.log(titulo);
	var texto = post.texto;
	console.log(texto);
})

/*
var persona = {
	nombre = "Juan",
	apellido = "Perez",
	edad: 23,
	nombreCompleto: function(){ return this.nombre+" "+this.apellido}
};
*/