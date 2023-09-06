# electron-builder

The templates currently used are packaged and built using [electron-builder](https://www.electron.build/).So we need to understand his configuration and better customize program packaging.

## electron-builder.json5

```json5
/**
 * @see https://www.electron.build/configuration/configuration
 */
{
  "appId": "YourAppID",
  "asar": false,
  "productName": "YourAppName",
  "directories": {
    "output": "release/${version}"
  },
  "files": [
    "dist",
    "dist-electron"
  ],
  "win": {
    "target": [
      {
        "target": "nsis",
        "arch": ["x64"]
      }
    ],
    "artifactName": "${productName}-Windows-${version}-Setup.${ext}"
  },
  "nsis": {
    "oneClick": false,
    "perMachine": false,
    "allowToChangeInstallationDirectory": true,
    "deleteAppDataOnUninstall": false
  },
  "mac": {
    "target": ["dmg"],
    "artifactName": "${productName}-Mac-${version}-Installer.${ext}"
  },
  "linux": {
    "target": ["AppImage"],
    "artifactName": "${productName}-Linux-${version}.${ext}"
  }
}
```

---

#### appId

The unique identifier of an application.
- usually a reverse domain name (such as com. example. myapp). When publishing an application, you need to use the same values in the package name and ID.

<details>
  <summary>
  中文
  </summary>
  应用程序的唯一标识符。
 <li>通常是一个反向域名（例如：com.example.myapp）。在发布应用程序时，您需要在包的名称和 ID 中使用相同的值。</li>
</details>

---

#### productName

The name of the application.

<details>
  <summary>
  中文
  </summary>
  应用程序的名称。
</details>

---

#### asar

Whether to package the application files into an asar file. 

- asar is a zip like archive format that can reduce the size of application packages.

<details>
  <summary>
  中文
  </summary>
  asar 是否将应用程序文件打包成一个 asar 文件。
<li>asar 是一种类似于 zip 的归档格式，可以减小应用程序包的大小。</li>
</details>

---

#### directories

 Contains some directory configurations.

- **output** specifies the output directory of the application package. The ${version} variable is used here to indicate that a directory corresponding to the application version number will be created in the output directory.

<details>
  <summary>
  中文
  </summary>
包含了一些目录配置。
<li>output 指定了应用程序包的输出目录。这里使用了 ${version} 变量，表示将在输出目录下创建一个与应用程序版本号相对应的目录。</li>
</details>

---

#### files

The files and directories included in the application:dist-electron and dist..

- dist-electron contains the code of the Electron application.
- dist contains other resources of the application (such as HTML, CSS, images, etc.).

<details>
  <summary>
  中文
  </summary>
应用程序包含的文件和目录：dist-electron 和 dist。
<li>dist-electron 包含 Electron 应用程序的代码，</li>
<li>dist 包含应用程序的其他资源（如 HTML、CSS、图片等）。</li>
</details>

---

#### linux
Specific configurations for the linux platform.

- **icon** The icon file for the application is set here. Usually, you need to place the icon file in the application package and specify its relative path here.

<details>
  <summary>
  中文
  </summary>
  linux 平台的特定配置。
 <li>icon 这里设置了应用程序的图标文件。通常情况下，您需要将图标文件放在应用程序包中，并在这里指定其相对路径。</li>
</details>

---

#### mac

Specific configurations for the macOS platform.

- **icon** Icon is the name of the application, and version is the version number of the application.
- **target** The target for application packaging has been specified, set to dmg here, which means packaging the application into a macOS installation program.
- **artifactName**  The file name of the application package was specified, where the ${productName} and ${version} variables were used. ProductName is the name of the application, and version is the version number of the application.

<details>
  <summary>
  中文
  </summary>
macOS 平台的特定配置。

<li> icon 是应用程序的名称，version 是应用程序的版本号。</li>
<li> target指定了应用程序打包的目标，这里设置为 dmg，表示将应用程序打包成一个 macOS 安装程序。</li>
<li> artifactName 指定了应用程序包的文件名，这里使用了 ${productName} 和 ${version} 变量。productName 是应用程序的名称，version 是应用程序的版本号。</li>
</details>

---

#### win

Specific configurations for the Windows platform.

- **icon** Icon is the name of the application, and version is the version number of the application.
- **target** The target for application packaging has been specified, where it is set to nsis, which means packaging the application into a Windows installation program.
  - **target** The target for application packaging has been specified, where it is set to nsis, which means packaging the application into a Windows installation program.
  - **arch** The specified CPU architecture for packaging is set to x64, indicating that only 64 bit Windows is packaged.
- **artifactName** The file name of the application package was specified, where the ${productName} and ${version} variables were used. ProductName is the name of the application, and version is the version number of the application.

<details>
  <summary>
  中文
  </summary>
 Windows 平台的特定配置。
<li>icon 是应用程序的名称，version 是应用程序的版本号。</li>
<ul>
<li>target</li>
  <ul>
  <li>target 指定了应用程序打包的目标，这里设置为 nsis，表示将应用程序打包成一个 Windows 安装程序。</li>
  <li>arch 指定了打包的 CPU 架构，这里设置为 x64，表示仅打包 64 位 Windows。</li>
  </ul>
</ul>
<li>artifactName 指定了应用程序包的文件名，这里使用了 ${productName} 和 ${version} 变量。productName 是应用程序的名称，version 是应用程序的版本号。</li>
</details>

---

#### nsis

Windows platform specific NSIS configuration.

- **oneClick** specifies whether to enable one click installation mode.
- **perMachine** specifies whether to install for all users.
- **allowToChangeInstallationDirectory** specifies whether users are allowed to change the installation directory.
- **deleteAppDataOnUninstall** specifies whether to delete user data when uninstalling the application.

<details>
  <summary>
  中文
  </summary>
Windows平台特定的 NSIS 配置。
 <li> oneClick : 指定是否启用一键安装模式，</li>
 <li> perMachine : 指定是否为所有用户安装，</li>
 <li> allowToChangeInstallationDirectory : 指定是否允许用户更改安装目录，</li>
 <li> deleteAppDataOnUninstall : 指定是否在卸载应用程序时删除用户数据。</li>
</details>

## Build Scripts

```json
"scripts": {
  "build-mac": "electron-builder build --mac",
  "build-win": "electron-builder build --win",
  "build-linux": "electron-builder build --linux",
}
```

## More

If you want to know more about the configuration, please refer to the [electron-build/configuration](https://www.electron.build/configuration/configuration) documentation.
