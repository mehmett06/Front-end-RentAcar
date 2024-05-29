/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { CreateTranmissionResponse } from '../model/models';
import { CreateTransmissionRequest } from '../model/models';
import { GetAllTranmissionResponse } from '../model/models';
import { GetTranmissionByIdResponse } from '../model/models';
import { GetTransmissionById400Response } from '../model/models';
import { UpdateTranmissionResponse } from '../model/models';
import { UpdateTransmissionRequest } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface AddRequestParams {
    createTransmissionRequest: CreateTransmissionRequest;
}

export interface GetTransmissionByIdRequestParams {
    id: number;
}

export interface UpdateTransmissionByIdRequestParams {
    id: number;
    updateTransmissionRequest: UpdateTransmissionRequest;
}


export interface TransmissionControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
* @param requestParameters
     */
    add(requestParameters: AddRequestParams, extraHttpRequestParams?: any): Observable<CreateTranmissionResponse>;

    /**
     * 
     * 
*/
    getAllTransmissions(extraHttpRequestParams?: any): Observable<Array<GetAllTranmissionResponse>>;

    /**
     * 
     * 
* @param requestParameters
     */
    getTransmissionById(requestParameters: GetTransmissionByIdRequestParams, extraHttpRequestParams?: any): Observable<GetTranmissionByIdResponse>;

    /**
     * 
     * 
* @param requestParameters
     */
    updateTransmissionById(requestParameters: UpdateTransmissionByIdRequestParams, extraHttpRequestParams?: any): Observable<UpdateTranmissionResponse>;

}
