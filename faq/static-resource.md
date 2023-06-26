# Packaging Static Resource Files

## Static file packaging for service processes

### List under `electron-builder.json5`'s file

[extraFiles](https://www.electron.build/configuration/contents.html#extrafiles) Array<String | FileSet> | String | FileSet

The same as extraResources but copy into the app’s content directory (`Contents` for MacOS, root directory for Linux and Windows).

```jsonc
{
  "extraFiles": [
    {
      "from": "dllFiles",
      "to": ".",
      "filter": ["*.dll"]
    }
  ]
}
```

## Static files for the rendering process

### List under `public`'s file

[public](https://vitejs.dev/guide/assets.html#the-public-directory) `<root>/public`

For example, dynamically introduced `img/html/txt/js/ts/fonts`  etc.

Directory to serve as plain static assets. Files in this directory are served at / during dev and copied to the root of outDir during build, and are always served or copied as-is without transform. The value can be either an absolute file system path or a path relative to project root.

Defining [`publicDir`](https://vitejs.dev/config/shared-options.html#publicdir) as `false` disables this feature.
