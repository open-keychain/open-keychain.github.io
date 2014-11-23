---
layout: page
title: Help
---

# Issues and Feature Requests

If you find a bug or you need some feature, please create [an issue on our Github-page](https://github.com/open-keychain/open-keychain/issues).

# Mailinglist

You can find [our mailinglist at Google Groups](http://groups.google.com/d/forum/openpgp-keychain-dev).

# Beta Versions

We are glad you want to test Beta versions of OpenKeychain and report early bugs.
Currently, these versions are distributed via Google Play only:

 1. Join the [OpenKeychain Google+ group](https://plus.google.com/u/0/communities/100667924987940385351)
 2. Visit this [special Google Play link and apply as a beta tester](https://play.google.com/apps/testing/org.sufficientlysecure.keychain)
 
# YubiKey NEO

  1. [Buy a YubiKey NEO](http://www.yubico.com/support/resellers/)
  2. [Prepare it for usage with OpenPGP using GnuPG and Yubico's tools](http://www.yubico.com/2012/12/yubikey-neo-openpgp/).
  3. Export the keypair from GnuPG with ``gpg -a --output gpg-secret-key.asc --export-secret-keys <insert key id or name> `` and transfer the file to your Android device.
  4. In OpenKeychain, select "Import from file", select the file and import the keypair. It will be automatically detect that this is a keypair that works with a YubiKey only.

You can now sign texts, files, emails, and everything that uses the [OpenPGP API](http://www.openkeychain.org/apps/). A screen will appear when you need to hold your YubiKey against the NFC antenna.

## Use different PIN
  1. Deselect "Use default YubiKey PIN" in OpenKeychain's advanced settings screen
  2. Follow [https://developers.yubico.com/ykneo-openpgp/CardEdit.html](https://developers.yubico.com/ykneo-openpgp/CardEdit.html)

## Import existing key onto the YubiKey
Follow [https://developers.yubico.com/ykneo-openpgp/KeyImport.html](https://developers.yubico.com/ykneo-openpgp/KeyImport.html)

## Advanced Infos
  * [https://developers.yubico.com/ykneo-openpgp](https://developers.yubico.com/ykneo-openpgp)
  * [https://github.com/Yubico/ykneo-openpgp](https://github.com/Yubico/ykneo-openpgp)

# Export Regulations
We are [required to comply with U.S. export regulations](https://support.google.com/googleplay/android-developer/answer/113770) due to the distributon of our apps on Google Play.
See [Export Regulations](http://www.openkeychain.org/about/export-regulations) for more information.