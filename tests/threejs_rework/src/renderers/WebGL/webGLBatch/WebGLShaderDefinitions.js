THREE.WebGLShaderDefinitions = {
		
	uniforms: [
	
		{ name: "uCameraInverseMatrix",     type: "mat4" },
		{ name: "uCameraPerspectiveMatrix", type: "mat4" },
		{ name: "uMeshGlobalMatrix",       	type: "mat4" },
		{ name: "uMeshNormalMatrix",       	type: "mat3" },
		{ name: "uBonesRootInverseMatrix",  type: "mat4" },
		{ name: "uBoneGlobalMatrices",      type: "mat4Array" },
		{ name: "uBonePoseMatrices",		type: "mat4Array" },
		{ name: "uPointLight0Matrix",  		type: "mat4" },
		{ name: "uPointLight1Matrix",  		type: "mat4" },
		{ name: "uSpotLight0Matrix",  		type: "mat4" },
		{ name: "uSpotLight1Matrix",  		type: "mat4" },
		{ name: "uDirectionalLight0Matrix",	type: "mat4" },
		{ name: "uDirectionalLight1Matrix",	type: "mat4" },
		{ name: "uSceneFogNear",            type: "1f" },
		{ name: "uSceneFogFar", 			type: "1f" },
		{ name: "uSceneFogColor", 			type: "vec3" },
		{ name: "uColor",					type: "vec3" },
		{ name:	"uMap0", 					type: "sampler2D" },
		{ name: "uMap1", 					type: "sampler2D" },
		{ name: "uLightMap", 				type: "sampler2D" },
		{ name: "uEnvMap", 					type: "sampler2D" },
		{ name: "uBumpMap", 				type: "sampler2D" },
		{ name: "uNormalMap",				type: "sampler2D" }
	],
	
	attributes: [
	
		{ name: "aVertex", 		type: "vec4" },	
		{ name: "aNormal",  	type: "vec3" },	
		{ name: "aColor",   	type: "vec3" },	
		{ name: "aUV0",     	type: "vec2" },	
		{ name: "aUV1",     	type: "vec2" },	
		{ name: "aSkinIndices", type: "vec4" },	
		{ name: "aSkinWeights", type: "vec4" },	
	],
	
	varyings: [
	
		{ name: "vUV0", 	type: "vec2" },
		{ name: "vUV1", 	type: "vec2" },
		{ name: "vEnvUV", 	type: "vec2" }
	]
}