# Example of DllPlugin and DllReferencePlugin

The plugins allow to split bundles into application-specific and external, so that when you develop an application, you don't need to rebuild vendor dependencies on each change, as it happens with standard Webpack setup.

It speeds up the development process (in this example build takes around 100ms instead of nearly 2 seconds) and allows to share vendor dependencies between application bundles. 

## Demo

### Without DllReferencePlugin - 1698ms, 2.95mb of bundles in total

![screen shot 2017-05-18 at 16 52 24](https://cloud.githubusercontent.com/assets/6684554/26208546/aa705e22-3bea-11e7-9749-66457237d004.png)

### With DllReferencePlugin - **88ms** (excluding one-off vendor bundle build), **1.75mb** of bundles in total

![screen shot 2017-05-18 at 16 51 46](https://cloud.githubusercontent.com/assets/6684554/26208551/acf59838-3bea-11e7-858c-00094dfcf0fd.png)
