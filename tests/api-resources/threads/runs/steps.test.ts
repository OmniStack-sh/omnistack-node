// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Omnistack from 'omnistack';
import { Response } from 'node-fetch';

const client = new Omnistack({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource steps', () => {
  test('retrieve', async () => {
    const responsePromise = client.threads.runs.steps.retrieve('thread_id', 'run_id', 'step_id');
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
      client.threads.runs.steps.retrieve('thread_id', 'run_id', 'step_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Omnistack.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.threads.runs.steps.retrieve(
        'thread_id',
        'run_id',
        'step_id',
        { include: ['step_details.tool_calls[*].file_search.results[*].content'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Omnistack.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.threads.runs.steps.list('thread_id', 'run_id');
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
      client.threads.runs.steps.list('thread_id', 'run_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Omnistack.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.threads.runs.steps.list(
        'thread_id',
        'run_id',
        {
          after: 'after',
          before: 'before',
          include: ['step_details.tool_calls[*].file_search.results[*].content'],
          limit: 0,
          order: 'asc',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Omnistack.NotFoundError);
  });
});
