export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  unathorized = 401,
  badRequest = 400,
  notFound = 400,
  serverError = 500,
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
};