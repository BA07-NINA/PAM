/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as MapImport } from './routes/map'
import { Route as IndexImport } from './routes/index'
import { Route as DevicesIndexImport } from './routes/devices/index'
import { Route as DevicesDeviceIdIndexImport } from './routes/devices/$deviceId/index'
import { Route as DevicesDeviceIdAudioFileIdImport } from './routes/devices/$deviceId/$audioFileId'

// Create/Update Routes

const MapRoute = MapImport.update({
  id: '/map',
  path: '/map',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DevicesIndexRoute = DevicesIndexImport.update({
  id: '/devices/',
  path: '/devices/',
  getParentRoute: () => rootRoute,
} as any)

const DevicesDeviceIdIndexRoute = DevicesDeviceIdIndexImport.update({
  id: '/devices/$deviceId/',
  path: '/devices/$deviceId/',
  getParentRoute: () => rootRoute,
} as any)

const DevicesDeviceIdAudioFileIdRoute = DevicesDeviceIdAudioFileIdImport.update(
  {
    id: '/devices/$deviceId/$audioFileId',
    path: '/devices/$deviceId/$audioFileId',
    getParentRoute: () => rootRoute,
  } as any,
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/map': {
      id: '/map'
      path: '/map'
      fullPath: '/map'
      preLoaderRoute: typeof MapImport
      parentRoute: typeof rootRoute
    }
    '/devices/': {
      id: '/devices/'
      path: '/devices'
      fullPath: '/devices'
      preLoaderRoute: typeof DevicesIndexImport
      parentRoute: typeof rootRoute
    }
    '/devices/$deviceId/$audioFileId': {
      id: '/devices/$deviceId/$audioFileId'
      path: '/devices/$deviceId/$audioFileId'
      fullPath: '/devices/$deviceId/$audioFileId'
      preLoaderRoute: typeof DevicesDeviceIdAudioFileIdImport
      parentRoute: typeof rootRoute
    }
    '/devices/$deviceId/': {
      id: '/devices/$deviceId/'
      path: '/devices/$deviceId'
      fullPath: '/devices/$deviceId'
      preLoaderRoute: typeof DevicesDeviceIdIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/map': typeof MapRoute
  '/devices': typeof DevicesIndexRoute
  '/devices/$deviceId/$audioFileId': typeof DevicesDeviceIdAudioFileIdRoute
  '/devices/$deviceId': typeof DevicesDeviceIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/map': typeof MapRoute
  '/devices': typeof DevicesIndexRoute
  '/devices/$deviceId/$audioFileId': typeof DevicesDeviceIdAudioFileIdRoute
  '/devices/$deviceId': typeof DevicesDeviceIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/map': typeof MapRoute
  '/devices/': typeof DevicesIndexRoute
  '/devices/$deviceId/$audioFileId': typeof DevicesDeviceIdAudioFileIdRoute
  '/devices/$deviceId/': typeof DevicesDeviceIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/map'
    | '/devices'
    | '/devices/$deviceId/$audioFileId'
    | '/devices/$deviceId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/map'
    | '/devices'
    | '/devices/$deviceId/$audioFileId'
    | '/devices/$deviceId'
  id:
    | '__root__'
    | '/'
    | '/map'
    | '/devices/'
    | '/devices/$deviceId/$audioFileId'
    | '/devices/$deviceId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  MapRoute: typeof MapRoute
  DevicesIndexRoute: typeof DevicesIndexRoute
  DevicesDeviceIdAudioFileIdRoute: typeof DevicesDeviceIdAudioFileIdRoute
  DevicesDeviceIdIndexRoute: typeof DevicesDeviceIdIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  MapRoute: MapRoute,
  DevicesIndexRoute: DevicesIndexRoute,
  DevicesDeviceIdAudioFileIdRoute: DevicesDeviceIdAudioFileIdRoute,
  DevicesDeviceIdIndexRoute: DevicesDeviceIdIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/map",
        "/devices/",
        "/devices/$deviceId/$audioFileId",
        "/devices/$deviceId/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/map": {
      "filePath": "map.tsx"
    },
    "/devices/": {
      "filePath": "devices/index.tsx"
    },
    "/devices/$deviceId/$audioFileId": {
      "filePath": "devices/$deviceId/$audioFileId.tsx"
    },
    "/devices/$deviceId/": {
      "filePath": "devices/$deviceId/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
