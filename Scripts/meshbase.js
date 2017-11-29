//MeshBase is the render object
//It holds all the bufferObjects for an object

function MeshBase(vertices, normals, tangents, indices, uvs)
{
	this.indicesLength;
	
	this.vertexBufferObject;
	this.normalBufferObject;
	this.tangentBufferObject;
	this.texCoordBufferObject;
	this.indexBufferObject;
	this.Init(vertices, normals, tangents, indices, uvs);
}

MeshBase.prototype.Init = function (vertices, normals, tangents, indices, uvs)
{
	//Create vertex buffer object and bind it
	this.vertexBufferObject = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBufferObject);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW); //What the bufferobject contains

	//Create vertex buffer object and bind it
	this.normalBufferObject = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBufferObject);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW); //What the bufferobject contains

	// //Create vertex buffer object and bind it
	this.tangentBufferObject = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.tangentBufferObject);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tangents), gl.STATIC_DRAW); //What the bufferobject contains

	// Create TextureCoord buffer object and bind it
	this.texCoordBufferObject = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.texCoordBufferObject);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);

	this.indicesLength = indices.length;
	//Create Index buffer object and bind it
	this.indexBufferObject = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBufferObject);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
}

// Bind all the buffers and render the meshBase
MeshBase.prototype.Render = function(positionAttributeLocation, normalAttributeLocation, tangentAttributeLocation, texCoordAttributeLocation)
{
	gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBufferObject);
	gl.vertexAttribPointer(
		positionAttributeLocation, //Attribute location
		3, //Number of elements per attribute
		gl.FLOAT, //type of elements
		gl.FALSE, //Normalized
		3 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
		0  // Offset from the beginning of a single vertex to this attribute
		);

	gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBufferObject);
	gl.vertexAttribPointer(
		normalAttributeLocation, //Attribute location
		3, //Number of elements per attribute
		gl.FLOAT, //type of elements
		gl.TRUE, //Normalized
		3 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
		0  // Offset from the beginning of a single vertex to this attribute
		);

	 gl.bindBuffer(gl.ARRAY_BUFFER, this.tangentBufferObject);
		gl.vertexAttribPointer(
	 	tangentAttributeLocation, //Attribute location
	 	3, //Number of elements per attribute
	 	gl.FLOAT, //type of elements
	 	gl.TRUE, //Normalized
	 	3 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
	 	0  // Offset from the beginning of a single vertex to this attribute
	 	);

	gl.bindBuffer(gl.ARRAY_BUFFER, this.texCoordBufferObject);
	gl.vertexAttribPointer(
		texCoordAttributeLocation, //Attribute location
		2, //Number of elements per attribute
		gl.FLOAT, //type of elements
		gl.FALSE, //Normalized
		2 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
		0  // Offset from the beginning of a single vertex to this attribute
		);

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBufferObject);
	//console.log("Render");
	gl.drawElements(gl.TRIANGLES, this.indicesLength, gl.UNSIGNED_SHORT, 0); //Uses currently bound buffer
}