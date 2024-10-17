// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Omnistack from 'omnistack';

const client = new Omnistack({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource speech', () => {
  test('create: required and optional params', async () => {
    const response = await client.audio.speech.create({
      input: 'input',
      model: 'string',
      voice: 'alloy',
      response_format: 'mp3',
      speed: 0.25,
    });
  });
});
