import {Type} from './Type';

export class EnumType extends Type {

    public writeEntities() {
        var value = "  export enum " + this.name + " {\n"
        var members = this.obj['Member'];
        if(members) {
            for (var i = 0; i < members.length; i++) {
                var attributes = members[i]['$'];
                value += "    " + attributes["Name"] + " = " + attributes["Value"];
                if (i < members.length - 1) value += ",";
                value += "\n";
            }
        }
        value += "  }\n\n"
        return value;
    }
}