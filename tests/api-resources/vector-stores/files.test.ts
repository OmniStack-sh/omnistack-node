// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Omnistack from 'omnistack';
import { Response } from 'node-fetch';

const client = new Omnistack({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  test('create: only required params', async () => {
    const responsePromise = client.vectorStores.files.create('vs_abc123', { file_id: 'file_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.vectorStores.files.create('vs_abc123', {
      file_id: 'file_id',
      chunking_strategy: { type: 'auto' },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.vectorStores.files.retrieve('vs_abc123', 'file-abc123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.vectorStores.files.retrieve('vs_abc123', 'file-abc123', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Omnistack.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.vectorStores.files.list('vector_store_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.vectorStores.files.list('vector_store_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Omnistack.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.vectorStores.files.list(
        'vector_store_id',
        { after: 'after', before: 'before', filter: 'in_progress', limit: 0, order: 'asc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Omnistack.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.vectorStores.files.delete('vector_store_id', 'file_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.vectorStores.files.delete('vector_store_id', 'file_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Omnistack.NotFoundError);
  });
});
