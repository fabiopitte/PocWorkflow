import { Injectable } from '@angular/core';
import * as data from '../assets/workflow-data.json';

@Injectable({
  providedIn: 'root',
})
export class WorkflowsService {
  constructor() {}

  get(): any {
    // console.log(data);
    return data;
  }
}
