import { Injectable } from '@angular/core';
import * as data from '../assets/workflow-data.json';
import * as conditionalData from '../assets/workflow-conditional-data.json';

@Injectable({
  providedIn: 'root',
})
export class WorkflowsService {
  constructor() {}

  get(): any {
    // console.log(data);
    return data;
  }

  getConditional(): any {
    return conditionalData;
  }
}
