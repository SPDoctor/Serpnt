import fs = require('fs');
import xml2js = require('xml2js');

import { Type } from './Type';
import { EnumType } from './EnumType';
import { EntityType } from './EntityType';
import { ComplexType } from './ComplexType';

var Types = [
    EnumType,
    EntityType,
    ComplexType
];

var metadataFilename = 'metadata.xml';
if (process.argv[2]) metadataFilename = process.argv[2];
var outdir = __dirname + '/../output/';
var parser = new xml2js.Parser();
fs.readFile(__dirname + '/../' + metadataFilename, function (err, data) {
    parser.parseString(data, function (err, result) {
        var schema = result;
        if (schema['edmx:Edmx']) schema = schema['edmx:Edmx'];
        if (schema['edmx:DataServices']) schema = schema['edmx:DataServices'][0];
        if (schema['Schema']) schema = schema['Schema'][0];
        //console.dir(schema, { depth: 1 });
        for (var iType = 0; iType < Types.length; iType++) {
            var typeName = Types[iType]['name'];
            if (schema[typeName]) {
                var i, filename = outdir + typeName + 's.ts';
                fs.writeFileSync(filename, '');
                console.log();
                console.log(typeName + ':');
                var count = schema[typeName].length - 1;
                for (i = 0; i <= count; i++) {
                    var type = new Types[iType](schema[typeName][i]);
                    if(i === 0) fs.appendFileSync(filename, type.writeHeader());
                    fs.appendFileSync(filename, type.writeEntities());
                    if(i === count) fs.appendFileSync(filename, type.writeFooter());
                }
            }
        }
        console.log('Done');
    });
});

var masterfilename = 'Graph.ts';
fs.writeFileSync(masterfilename, "");
for (var iType = 0; iType < Types.length; iType++) {
    var typeName = Types[iType]['name'];
    fs.appendFileSync(masterfilename, "///<reference path='" + typeName + "s.ts'/>\n");
    }
fs.appendFileSync(masterfilename, "\nnamespace graph {\n");
fs.appendFileSync(masterfilename, "\n}\n");