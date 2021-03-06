import * as $protobuf from "protobufjs";
export interface IPerson {
    id?: (number|null);
    name?: (string|null);
    age?: (number|null);
}

export class Person implements IPerson {
    constructor(properties?: IPerson);
    public id: (number);
    public name: string;
    public age: number;
    public static create(properties?: IPerson): Person;
    public static encode(message: IPerson, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPerson, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Person;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Person;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Person;
    public static toObject(message: Person, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IPeople {
    person?: (IPerson[]|null);
}

export class People implements IPeople {
    constructor(properties?: IPeople);
    public person: IPerson[];
    public static create(properties?: IPeople): People;
    public static encode(message: IPeople, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPeople, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): People;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): People;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): People;
    public static toObject(message: People, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}
