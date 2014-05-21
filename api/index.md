---
layout: page
title: For App Developers
---


OpenKeychain provides two APIs, namely the Intent API and the Remote OpenPGP API. The Intent API can be used without permissions to start OpenKeychain's activities for cryptographic operations, import of keys, etc. However, it always requires user input, so that no malicious application can use this API without user intervention.
The Remote OpenPGP API is more sophisticated and allows to to operations without user interaction in the background. When utilizing this API, OpenKeychain asks the user on first use to grant access for the calling client application.

More technical information and examples about these APIs can be found in the project's wiki:

  * [Intent API](https://github.com/open-keychain/open-keychain/wiki/Intent-API)
  * [Remote OpenPGP API](https://github.com/open-keychain/open-keychain/wiki/OpenPGP-API)
