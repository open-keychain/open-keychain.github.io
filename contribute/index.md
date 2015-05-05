---
layout: page
title: Contribute
---

##  Help us coding

If you want to contribute to OpenKeychain, please fork our Git-Repository, make your changes and create a pull-request.
We also have a [small guide in our README how to start hacking](https://github.com/open-keychain/open-keychain#how-to-help-the-project).

## Translations

Help translating OpenKeychain! Everybody can participate at [OpenKeychain on Transifex](http://www.transifex.com/projects/p/open-keychain/).  
We collect some helpful information regarding the language and usage of Transifex [in our Wiki](https://github.com/open-keychain/open-keychain/wiki/Language-Conventions).

<a target="_blank" style="text-decoration:none; color:black; font-size:66%" href="https://www.transifex.com/projects/p/open-keychain/resource/strings/" 
title="See more information on Transifex.com">Top translations: open-keychain » strings</a><br/>
<img border="0" src="https://www.transifex.com/projects/p/open-keychain/resource/strings/chart/image_png"/>

## Website

This website is also hosted as a git repository, so if you find spelling/grammer mistakes or want to add more content, you are very welcome to do so by submitting a pull request for the [open-keychain.github.io repository](https://github.com/open-keychain/open-keychain.github.io).

## API

OpenKeychain provides two APIs, namely the OpenKeychain Intents and the OpenPGP API. The Intents can be used without permissions to start OpenKeychain's activities for cryptographic operations, import of keys, etc. However, it always requires user input, so that no malicious application can use this API without user intervention.
The OpenPGP API is more sophisticated and allows to to operations without user interaction in the background. When utilizing this API, OpenKeychain asks the user on first use to grant access for the calling client application.

More technical information and examples for these APIs can be found here:

  * [OpenKeychain Intents](https://github.com/open-keychain/openkeychain-intents)
  * [OpenPGP API](https://github.com/open-keychain/openpgp-api)
