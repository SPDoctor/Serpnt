export abstract class Type {
    public obj: any;
    public attributes: any;
    public name: string;

    public constructor(obj: any) {
        this.obj = obj;
        this.attributes = obj['$'];
        this.name = this.attributes['Name'];
        console.log('  ' + this.name);
    }

    public writeHeader(): string {
        return 'namespace graph {\n\n';
    }

    public writeFooter(): string {
        return '\n}\n';
    }

    public writeEntities(): string {
        return '';
    }
}