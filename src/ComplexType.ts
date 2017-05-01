import {EntityType} from './EntityType';

export class ComplexType extends EntityType {
    
    public writeHeader() {
        return 'namespace graph {\n\n';
    }

}