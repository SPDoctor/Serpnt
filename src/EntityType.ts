import {Type} from './Type';

export class EntityType extends Type {

    public writeHeader() {
        return super.writeHeader() + "  export class entity { id: string; }\n\n";
    }

    public writeEntities() {
        if(this.name == 'entity') return ''; // special case - entity has to go first
        if(this.name == 'package') this.name = 'Package'; // package is a TypeScript reserved word
        var baseType = this.attributes['BaseType'];
        var value = "  export class " + this.name;
        if(baseType) {
            baseType = baseType.replace('microsoft.graph.', '');
            value += " extends " + baseType;
            console.log('        :: ' + baseType);
        }
        value += " {\n";
        var properties = this.obj['Property'];
        if(properties) {
            for (var i = 0; i < properties.length; i++) {
                var attributes = properties[i]['$'];
                value += "    " + attributes["Name"] + ": " + EntityType.getType(attributes["Type"]) + ';';
                value += "\n";
            }
        }
        value += "  }\n\n";
        return value;
    }

    static getType(type : string) {
        if(type === 'microsoft.graph.package') return 'Package';  // package is a TypeScript reserved word
        if(type.indexOf('microsoft.graph.') == 0) return type.substr(10);
        type = type.replace('Edm.', '').toLowerCase();
        switch(type) {
            case 'int32': return 'number';
            case 'string': ; // fallsthrough
            case 'boolean': return type;
            default: return 'any';
        }
    }
}