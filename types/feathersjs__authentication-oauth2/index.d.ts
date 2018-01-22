// Type definitions for @feathersjs/authentication-oauth2 1.0
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript
// TypeScript Version: 2.2

import {
    Application,
    Paginated
} from '@feathersjs/feathers';
import { Request } from 'express';

export default function feathersAuthenticationOAuth2(options?: FeathersAuthenticationOAuth2Options): () => void;

export interface FeathersAuthenticationOAuth2Options {
    /**
     * The field to look up the entity by when logging in with the provider. Defaults to '<provider>Id' (ie. 'facebookId').
     */
    idField: string;
    /**
     * The route to register the middleware
     */
    path: string;
    /**
     * The route to register the callback handler
     */
    callbackPath: string;
    /**
     * The callback url.
     */
    callbackURL: string;
    successRedirect: string;
    failureRedirect: string;
    /**
     * the entity that you are looking up
     */
    entity: string;
    /**
     * the service to look up the entity
     */
    service: string;
    /**
     * whether the request object should be passed to `verify`
     */
    passReqToCallback: boolean;
    /**
     * whether to use sessions,
     */
    session: boolean;
    /**
     * Express middleware for handling the oauth callback. Defaults to the built in middleware. todo: needs a proper type
     */
    handler: any;
    /**
     * The response formatter. Defaults the the built in feathers-rest formatter, which returns JSON. todo: needs a proper type
     */
    formatter: any;
    /**
     * A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
     */
    Verifier: OAuth2Verifier;
}

export class OAuth2Verifier {
    constructor(app: Application<any>, options: any)

    _updateEntity(entity: any, data: { profile: any, accessToken: string, refreshToken: string }): Promise<any>; // updates an existing entity
    _createEntity(data: { profile: any, accessToken: string, refreshToken: string }): Promise<any>; // creates an entity if they didn't exist already
    _normalizeResult<T>(results: T[] | Paginated<T>): Promise<T>;  // normalizes result from service to account for pagination
    verify(req: Request, accessToken: string, refreshToken: string, profile: any, done: (err: Error | null, user: object, info: object) => void): void;
}
