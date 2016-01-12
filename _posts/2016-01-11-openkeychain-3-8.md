---
layout: post
title: "OpenKeychain 3.7 and 3.8: Android 6 Permissions, Key Editing, Remember Passwords, and Facebook Support"
---

Happy New Year!
May 2016 be the year where encrypted email finally becomes usable with OpenKeychain and K-9 Mail!

To bridge the time until a new K-9 Mail version will be announced, we released OpenKeychain 3.7 and 3.8 with some nice improvements.

## Android 6 Permissions
OpenKeychain 3.7 and 3.8 bring better support for Android 6 runtime permissions.
This means if you are lucky and your device manufacturer updated your smartphone or tablet to the latest version, you can now selectively decide which permissions you want to grant to OpenKeychain.
For example, the camera permission is not requested until you scan your friend's QR code to confirm her OpenPGP key.
Some permissions may actually never be requested, e.g., reading and modifying the SD card is only required when opening files using file managers such as [Amaze](https://f-droid.org/repository/browse/?fdid=com.amaze.filemanager).

## Rethinking Key Editing
We believe that editing subkeys is a very advanced use case, which is rarely done in OpenPGP's day-to-day usage.
That is why we removed the "edit key" menu item from the key view.
Identities can now be edited by touching the small button below their list, which now also uploads changes to your preferred keyserver.
Still, we think that special use cases exist where you need to edit your subkeys, so you can still find this option inside our "Advanced" key screen.

<div style="border:0px;clear:both;padding:0px;margin:0px;overflow:hidden;">
<div style="float:left;"><img src="{{ site.url }}/public/images/2016-01-12/edit1-frame.png" style="width:250px;" /></div>
<div style="float:left;"><img src="{{ site.url }}/public/images/2016-01-12/edit2-frame.png" style="width:250px;" /></div>
</div>

## How To Remember Key Passwords?
During user studies, we found that many people were confused by the fact that OpenKeychain memorizes entered key passwords.
Some of them perceived this as a security problem, mainly because it memorized the passwords without informing them about this.
In interviews we found that users are accustomed to "remember me" check boxes when logging into websites, so we redesigned the key password dialog to work in a similar way.
In addition, we added an option to remember passwords until the device screen goes off, which we hope fits nicely into people's usage pattern besides the usage of periods of time.

<div style="border:0px;clear:both;padding:0px;margin:0px;overflow:hidden;">
<div style="float:left;"><img src="{{ site.url }}/public/images/2016-01-12/remember-frame.png" style="width:250px;" /></div>
</div>

## Facebook Key Import
OpenKeychain now supports key import from Facebook URLs, when an OpenPGP key has been published in a user's profile and its visibility has been set to "Public".
You can try this by installing OpenKeychain 3.8 and opening this blog post in your favorite browser.
Now you can download Adithya's key from [https://www.facebook.com/adithya.abraham/publickey/download](https://www.facebook.com/adithya.abraham/publickey/download).
Unfortunately, I forgot to add this to the changelog inside OpenKeychain.

## Changelog of Version 3.8

  * Redesigned key editing
  * Choose remember time individually when entering passwords
  * Facebook key import

## Changelog of Version 3.7

  * Improved Android 6 support (permissions, integration into text selection)
  * API: Version 10

## Install OpenKeychain
OpenKeychain is available on Google Play and F-Droid.

<div style="border:0px;clear:both;padding:0px;margin:0px;overflow:hidden;">
<p style="float: left;"><a href="https://f-droid.org/app/org.sufficientlysecure.keychain"><img src="{{ site.url }}/public/images/fdroid.png" /></a>
<a href="https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain"><img src="{{ site.url }}/public/images/google_play.png" /></a></p>
</div>

\- Dominik Schürmann