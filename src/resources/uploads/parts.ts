// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PartsAPI from './parts';
import * as UploadsAPI from './uploads';

export class Parts extends APIResource {
  /**
   * Adds a [Part](/docs/api-reference/uploads/part-object) to an
   * [Upload](/docs/api-reference/uploads/object) object. A Part represents a chunk
   * of bytes from the file you are trying to upload.
   *
   * Each Part can be at most 64 MB, and you can add Parts until you hit the Upload
   * maximum of 8 GB.
   *
   * It is possible to add multiple Parts in parallel. You can decide the intended
   * order of the Parts when you
   * [complete the Upload](/docs/api-reference/uploads/complete).
   */
  create(
    uploadId: string,
    body: PartCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UploadsAPI.UploadPart> {
    return this._client.post(
      `/uploads/${uploadId}/parts`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface PartCreateParams {
  /**
   * The chunk of bytes for this Part.
   */
  data: Core.Uploadable;
}

export namespace Parts {
  export import PartCreateParams = PartsAPI.PartCreateParams;
}
