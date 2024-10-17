// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SpeechAPI from './speech';
import * as TranscriptionsAPI from './transcriptions';
import * as TranslationsAPI from './translations';

export class Audio extends APIResource {
  speech: SpeechAPI.Speech = new SpeechAPI.Speech(this._client);
  transcriptions: TranscriptionsAPI.Transcriptions = new TranscriptionsAPI.Transcriptions(this._client);
  translations: TranslationsAPI.Translations = new TranslationsAPI.Translations(this._client);
}

export namespace Audio {
  export import Speech = SpeechAPI.Speech;
  export import SpeechCreateParams = SpeechAPI.SpeechCreateParams;
  export import Transcriptions = TranscriptionsAPI.Transcriptions;
  export import TranscriptionCreateResponse = TranscriptionsAPI.TranscriptionCreateResponse;
  export import TranscriptionCreateParams = TranscriptionsAPI.TranscriptionCreateParams;
  export import Translations = TranslationsAPI.Translations;
  export import TranslationCreateResponse = TranslationsAPI.TranslationCreateResponse;
  export import TranslationCreateParams = TranslationsAPI.TranslationCreateParams;
}
