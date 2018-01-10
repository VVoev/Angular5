import {Pipe} from '@angular/core';
import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';


@Pipe({
    name:'convertToSpaces'
})

export class ConverToSpacesPipe implements PipeTransform{

    transform(value: string, charakter:string):string {
        return value.replace(charakter,' ');
    }

}

