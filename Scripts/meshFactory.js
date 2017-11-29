var responseText;
function CreateObjFromJSONfile(filePath, gameObject)
{
	loadJSONResource(filePath, gameObject, OnModelLoaded);
}

var publicModel;
function OnModelLoaded(err, model, gameObject)
{
	publicModel = model;
	var vertices = model.meshes[0].vertices;
	var normals = model.meshes[0].normals;
	var tangents = model.meshes[0].tangents;
	var indices = [].concat.apply([], model.meshes[0].faces);
	var uvs = model.meshes[0].texturecoords[0];

	var meshBase = new MeshBase(vertices, normals, tangents, indices, uvs);
	gameObject.mesh = new Mesh(meshBase);
	console.log(gameObject.mesh)
	gameObjects.push(gameObject);
}
