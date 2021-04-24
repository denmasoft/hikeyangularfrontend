/**
 * Base interface of all the API requests.
 */
export interface IApiResponse<T> {
    status: string;
    response: T;
    messages: string[];
    response_code: number; // this is the actual status code
}

// comment