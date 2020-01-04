# Ionic Automatic Increment Version
Auto increment ionic version before build cordova 

Paste below code to your config.xml and create folder"/script" on root ionic project and paste file IncrementIonicVersion.js .
...
`<hook src="scripts/IncrementIonicVersion.js" type="before_build"/>`
...

When you want change version on other type change type parameter to bellow:

`
after_build
after_compile
after_clean
after_docs
after_emulate
after_platform_add
after_platform_rm
after_platform_ls
after_plugin_add
after_plugin_ls
after_plugin_rm
after_plugin_search
after_plugin_install // Plugin hooks in plugin.xml are executed for a plugin being installed only
after_prepare
after_run
after_serve
before_build
before_clean
before_compile
before_docs
before_emulate
before_platform_add
before_platform_rm/
before_platform_ls
before_plugin_add
before_plugin_ls
before_plugin_rm
before_plugin_search/
before_plugin_install // Plugin hooks in plugin.xml are executed for a plugin being installed only
before_plugin_uninstall // Plugin hooks in plugin.xml are executed for a plugin being uninstalled only
before_prepare
before_run
before_serve
pre_package // Windows and Windows Phone only`
