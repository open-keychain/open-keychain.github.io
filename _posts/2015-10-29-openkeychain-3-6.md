---
layout: post
title: OpenKeychain 3.6 Security Audit and Tons of New Features
---

## Security Audit
We are proud to announce that OpenKeychain has received a security audit where no critical vulnerabilities have been found.
This audit has been performed by [cure53](https://cure53.de/) and was sponsored by the [Open Technology Fund](https://www.opentech.fund/).
All identified vulnerabilities have been discussed with cure53 and were properly fixed in OpenKeychain 3.6.
We prepared a [wiki page including the report and our fixes](https://github.com/open-keychain/open-keychain/wiki/cure53-Security-Audit-2015) if you are interested in the gory details.

## OpenKeychain 3.6
OpenKeychain version 3.6 is an important milestone in our development, not only because of the security audit.
Foremost, encrypted backups have been implemented.
To keep the list of contacts made with OpenKeychain to yourself, key backups from OpenKeychain are now encrypted by using an automatically generated Backup Code.
Write it on a piece of paper and dispose the paper after transferring your keys to your desktop to import them into GnuPG (see [our FAQ](https://www.openkeychain.org/faq/) how to import using gpg).
For long term backups, put the paper at a physically secure place.
In our opinion, due to the [length and randomness of the Backup Codes](https://github.com/open-keychain/open-keychain/wiki/Backups), you can transfer these backups via cloud storage providers like Google Drive.

<div style="border:0px;clear:both;padding:0px;margin:0px;overflow:hidden;">
<div style="float:left;"><img src="{{ site.url }}/public/images/2015-10-29/backup1-frame.png" style="width:250px;" /></div>
<div style="float:left;"><img src="{{ site.url }}/public/images/2015-10-29/backup2-frame.png" style="width:250px;" /></div>
<div style="float:left;"><img src="{{ site.url }}/public/images/2015-10-29/backup3-frame.png" style="width:250px;" /></div>
</div>

We acknowledge that support for [PGP/MIME](https://tools.ietf.org/html/rfc3156) is currently lacking in most email apps.
Until we tackle integrated support for PGP/MIME in K-9 Mail, we integrated a simple MIME parser into OpenKeychain that allows to decrypt PGP/MIME emails.
This works from email clients, like K-9 Mail, by downloading the full message, showing the attachment, and then opening the encrypted message with OpenKeychain.
Other email clients should be supported in a similar manner.
Unfortunately, we still can not provide support for the original AOSP Mail client due to a [critical bug](https://github.com/open-keychain/open-keychain/issues/290) in it (not OpenKeychain!).

<div style="border:0px;clear:both;padding:0px;margin:0px;overflow:hidden;">
<div style="float:left;"><img src="{{ site.url }}/public/images/2015-10-29/k9mail1-frame.png" style="width:250px;" /></div>
<div style="float:left;"><img src="{{ site.url }}/public/images/2015-10-29/k9mail2-frame.png" style="width:250px;" /></div>
<div style="float:left;"><img src="{{ site.url }}/public/images/2015-10-29/k9mail3-frame.png" style="width:250px;" /></div>
</div>

Another cool feature is practically solving the problem that key revocations are often not noticed by users.
We implemented automatic updates of OpenKeychain's key database using Android sync adapters.
Every 3 days, all keys that have not been updated for more than 7 days are updated from the pool of keyservers.
All updates are executed over TLS with pinned certificates, thus only the keyserver operator could assign these key updates to one IP address.
If you are still concerned about your privacy, you can enable Tor support inside OpenKeychain's settings.
While we were at it, we redesigned the settings user interface and introduced a category for experimental features.
Besides the most requested feature on Google Play but also most unimportant one for the OpenKeychain developers, the DARK THEME, several features from research conducted at the [Institute for Operating Systems and Computer Networks at TU Braunschweig](https://www.ibr.cs.tu-bs.de) have been integrated.
We will likely add more of these settings and feature some of them in our blog.

<div style="border:0px;clear:both;padding:0px;margin:0px;overflow:hidden;">
<div style="float:left;"><img src="{{ site.url }}/public/images/2015-10-29/settings-frame.png" style="width:250px;" /></div>
<div style="float:left;"><img src="{{ site.url }}/public/images/2015-10-29/sync-frame.png" style="width:250px;" /></div>
</div>

## TLS for openkeychain.org
As a side note: openkeychain.org is now available over TLS exclusively, additionally secured by [HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security).

## Changelog of Version 3.6

  * Encrypted backups
  * Security fixes based on external security audit
  * YubiKey NEO key creation wizard
  * Basic internal MIME support
  * Automatic key synchronization
  * Experimental feature: link keys to Github, Twitter accounts
  * Experimental feature: key confirmation via phrases
  * Experimental feature: dark theme
  * API: Version 9

## Install OpenKeychain
OpenKeychain is available on Google Play and F-Droid.

<div>
<p style="float: left;"><a href="https://f-droid.org/app/org.sufficientlysecure.keychain"><img src="{{ site.url }}/public/images/fdroid.png" /></a>
<a href="https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain"><img src="{{ site.url }}/public/images/google_play.png" /></a></p>
</div>

\- Dominik