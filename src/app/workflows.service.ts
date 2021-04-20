import { Injectable } from '@angular/core';
import * as data from '../assets/workflow-data.json';
// import * as conditionalData from '../assets/workflow-conditional-data.json';

@Injectable({
  providedIn: 'root',
})
export class WorkflowsService {
  constructor() {}

  get(): any {
    // console.log(data);
    return data;
  }

  getConditional(allData: any, parentId: number): any {
    debugger;
    if (allData.default != undefined) {
      let result = allData.default.boxes.map((x: { children: any; }) => x.children);
      result = result.filter((x: any) => x != undefined);
      result = result[0].filter((x: any) => x.parentId == parentId);
      return result;  
    }

    let result = allData.map((x: { children: any; }) => x.children);
    result.
    result = result.filter((x: any) => x != undefined);
    
    // if (result.length > 0){
    //   for (var i = 0; i < result.length; i++){
    //     var res = result[i].filter((x: any) => x.parentId == parentId);
    //       if (res != undefined && res.length > 0) {
    //         return res;
    //       }
    //   }
    // }
    result = result[0].filter((x: any) => x.parentId == parentId);
    return result;  

    //return conditionalData;
  }
  
}
