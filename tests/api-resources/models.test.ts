// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Omnistack from 'omnistack';
import { Response } from 'node-fetch';

const client = new Omnistack({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource models', () => {
  test('retrieve', async () => {
    const responsePromise = client.models.retrieve('gpt-4o-mini');
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
    await expect(client.models.retrieve('gpt-4o-mini', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Omnistack.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = client.models.list();
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
    await expect(client.models.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Omnistack.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.models.delete('ft:gpt-4o-mini:acemeco:suffix:abc123');
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
      client.models.delete('ft:gpt-4o-mini:acemeco:suffix:abc123', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Omnistack.NotFoundError);
  });
});
