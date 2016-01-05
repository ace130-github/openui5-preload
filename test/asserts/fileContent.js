// Copyright 2015 SAP SE.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http: //www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
// either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
"use strict";

var assert = require('assert');

exports.equal = function (oOptions){
	var oReadOptions = {
		encoding : 'utf8'
	};

	var sActualFileContent = grunt.file.read(oOptions.sActualFileSource, oReadOptions)
		.replace(/\r\n/gm, '\n') // replace \r\n with \n to be consistent everywhere
		.replace(/\\r\\n/gm, '\\n') // replace \\r\\n with \\n to be consistent everywhere
		.replace(/\n$/, ''); // remove the last LF;
	var sExpectedFileContent = grunt.file.read(oOptions.sExpectedFileSource, oReadOptions)
		.replace(/\r\n/gm, '\n') // replace \r\n with \n to be consistent everywhere
		.replace(/\\r\\n/gm, '\\n') // replace \\r\\n with \\n to be consistent everywhere
		.replace(/\n$/, ''); // remove the last LF

	assert.equal(sActualFileContent, sExpectedFileContent, oOptions.sMessage);
};