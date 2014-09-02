---
layout: post
title: OpenKeychain 2.9
---

After the huge changes in v2.8, we are now trying to release as early and often as possible™.

## Changelog 2.9
  * Fixing crashes introduced in v2.8
  * Experimental ECC support
  * Experimental Yubikey support (signing-only with imported keys)

[Google Play](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain)

[F-Droid](https://f-droid.org/app/org.sufficientlysecure.keychain)

This release contains two experimental features. We like to gather early feedback so here are some usage instructions:

## ECC support
You can edit your existing key and add ECDH and ECDSA subkeys to your key. Currently only the NIST curves standardized for OpenPGP in [RFC6637](http://tools.ietf.org/html/rfc6637) are supported. The cryptographic implementations were provided by [Bouncy Castle 1.51](https://www.bouncycastle.org/).

## Yubikey NEO support
Currently, only signature generation is supported, support for decryption will follow soon. To test this feature follow these steps:

  1. [Buy a Yubikey NEO](http://www.yubico.com/support/resellers/) and [prepare it for usage with OpenPGP using GnuPG and Yubico's tools](http://www.yubico.com/2012/12/yubikey-neo-openpgp/).
  2. Export the keypair from GnuPG and transfer it to your Android device.
  3. In OpenKeychain import the keypair, it will be automatically detect that this is a keypair that works with a Yubikey only.
  
You can now sign texts, files, emails, and everything that uses the [OpenPGP API](http://www.openkeychain.org/apps/). A screen will appear when you need to hold your Yubikey against the NFC antenna.

This work was mainly done by Signe Rüsch, who based her work on previous code by Philipp Jakubeit.