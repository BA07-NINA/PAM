/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as MapImport } from './routes/map'
import { Route as DevicesImport } from './routes/devices'
import { Route as IndexImport } from './routes/index'
import { Route as DeviceDeviceFilesImport } from './routes/device/deviceFiles'
import { Route as DeviceDeviceDashboardImport } from './routes/device/deviceDashboard'

// Create/Update Routes

const MapRoute = MapImport.update({
  id: '/map',
  path: '/map',
  getParentRoute: () => rootRoute,
} as any)

const DevicesRoute = DevicesImport.update({
  id: '/devices',
  path: '/devices',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DeviceDeviceFilesRoute = DeviceDeviceFilesImport.update({
  id: '/device/deviceFiles',
  path: '/device/deviceFiles',
  getParentRoute: () => rootRoute,
} as any)

const DeviceDeviceDashboardRoute = DeviceDeviceDashboardImport.update({
  id: '/device/deviceDashboard',
  path: '/device/deviceDashboard',
  getParentRoute: () => rootRoute,
} as any)

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
    '/devices': {
      id: '/devices'
      path: '/devices'
      fullPath: '/devices'
      preLoaderRoute: typeof DevicesImport
      parentRoute: typeof rootRoute
    }
    '/map': {
      id: '/map'
      path: '/map'
      fullPath: '/map'
      preLoaderRoute: typeof MapImport
      parentRoute: typeof rootRoute
    }
    '/device/deviceDashboard': {
      id: '/device/deviceDashboard'
      path: '/device/deviceDashboard'
      fullPath: '/device/deviceDashboard'
      preLoaderRoute: typeof DeviceDeviceDashboardImport
      parentRoute: typeof rootRoute
    }
    '/device/deviceFiles': {
      id: '/device/deviceFiles'
      path: '/device/deviceFiles'
      fullPath: '/device/deviceFiles'
      preLoaderRoute: typeof DeviceDeviceFilesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/devices': typeof DevicesRoute
  '/map': typeof MapRoute
  '/device/deviceDashboard': typeof DeviceDeviceDashboardRoute
  '/device/deviceFiles': typeof DeviceDeviceFilesRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/devices': typeof DevicesRoute
  '/map': typeof MapRoute
  '/device/deviceDashboard': typeof DeviceDeviceDashboardRoute
  '/device/deviceFiles': typeof DeviceDeviceFilesRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/devices': typeof DevicesRoute
  '/map': typeof MapRoute
  '/device/deviceDashboard': typeof DeviceDeviceDashboardRoute
  '/device/deviceFiles': typeof DeviceDeviceFilesRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/devices'
    | '/map'
    | '/device/deviceDashboard'
    | '/device/deviceFiles'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/devices'
    | '/map'
    | '/device/deviceDashboard'
    | '/device/deviceFiles'
  id:
    | '__root__'
    | '/'
    | '/devices'
    | '/map'
    | '/device/deviceDashboard'
    | '/device/deviceFiles'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DevicesRoute: typeof DevicesRoute
  MapRoute: typeof MapRoute
  DeviceDeviceDashboardRoute: typeof DeviceDeviceDashboardRoute
  DeviceDeviceFilesRoute: typeof DeviceDeviceFilesRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DevicesRoute: DevicesRoute,
  MapRoute: MapRoute,
  DeviceDeviceDashboardRoute: DeviceDeviceDashboardRoute,
  DeviceDeviceFilesRoute: DeviceDeviceFilesRoute,
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
        "/devices",
        "/map",
        "/device/deviceDashboard",
        "/device/deviceFiles"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/devices": {
      "filePath": "devices.tsx"
    },
    "/map": {
      "filePath": "map.tsx"
    },
    "/device/deviceDashboard": {
      "filePath": "device/deviceDashboard.tsx"
    },
    "/device/deviceFiles": {
      "filePath": "device/deviceFiles.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
