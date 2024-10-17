// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Omnistack from 'omnistack';
import { Response } from 'node-fetch';

const client = new Omnistack({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource projects', () => {
  test('create: only required params', async () => {
    const responsePromise = client.organization.projects.create('project_id', { name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.organization.projects.create('project_id', { name: 'name' });
  });

  test('retrieve', async () => {
    const responsePromise = client.organization.projects.retrieve('project_id');
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
      client.organization.projects.retrieve('project_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Omnistack.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.organization.projects.list();
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
    await expect(client.organization.projects.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Omnistack.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organization.projects.list(
        { after: 'after', include_archived: true, limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Omnistack.NotFoundError);
  });

  test('archive', async () => {
    const responsePromise = client.organization.projects.archive('project_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organization.projects.archive('project_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Omnistack.NotFoundError);
  });
});
