import { IsString } from "class-validator";

export class CeateCofeeDto {
    @IsString()
    // eslint-disable-next-line prettier/prettier
    readonly name: string;

    @IsString()
    readonly brand: string;

    @IsString({ each: true })
    readonly flavors: string[];
}
