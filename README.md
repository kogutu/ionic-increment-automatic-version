# Ionic Automatic Increment Version
Auto increment ionic version before build cordova 

Paste below code to your config.xml and create folder"/script" on root ionic project and paste file IncrementIonicVersion.js .
...
`<hook src="scripts/IncrementIonicVersion.js" type="before_build"/>`
...
