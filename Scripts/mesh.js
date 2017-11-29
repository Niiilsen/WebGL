//The mesh holds a material and a meshbase containing bufferobjects
function Mesh(meshbase)
{
	this.meshbase = meshbase;

	this.material = new Material();
}