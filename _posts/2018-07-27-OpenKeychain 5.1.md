---
title: "OpenKeychain 5.1"
excerpt: "We released OpenKeychain version 5.1"
layout: post
author: valodim
---

This month we released OpenKeychain version 5.1.

We have accumulated a bit of a backlog of improvements since our last release announcement.
Some highlights:

### Autocrypt
In version 5.0, we introduced support for [Autocrypt](https://autocrypt.org).
K-9 Mail [since Version 5.4](https://k9mail.github.io/2018/01/07/5.4-Release.html) uses this to automate the exchange of public keys.
Other compatible clients include [Enigmail](https://enigmail.net) and [DeltaChat](https://delta.chat/).

### Elliptic Curve Cryptography
Version 4.9 completed support for modern keys based on Curve 25519.
These keys offer stronger security guarantees and faster operations than RSA at smaller key sizes.
OpenKeychain should now be able to work with all commonly used keys.

### WKD
OpenKeychain now includes the Web Key Directory (WKD) mechanism.
This automatically looks up keys on the provider domain when searching for an email address, if available.
For example, searching for `linus@kernel.org` will automatically fetch the correct key from kernel.org, avoiding ambiguity from keyservers.
Many thanks to Wiktor Kwapisiewicz for contributing this feature.

### Improved USB support
OpenKeychain should now work correctly with [Gnuk](https://www.fsij.org/category/gnuk.html), Nitrokey and Ledger Nano S security tokens via USB, as well as the Yubikey 4.
Shout outs to the guys at [Nitrokey](https://www.nitrokey.com/) and [Yubico](https://yubico.com) for providing test devices!

### Fix security issue

In version 5.1, we fixed a potential security issue with the external key status interface.
We are not aware that this has been exploited in practice, users should still update to at least version 5.1 as soon as possible.
You can find some details in our documentation of past [vulnerabilities](https://github.com/open-keychain/open-keychain/wiki/Vulnerabilities).

## Install OpenKeychain
OpenKeychain is available on Google Play and F-Droid.

<div style="border:0px;clear:both;padding:0px;margin:0px;overflow:hidden;">
<p style="float: left;"><a href="https://f-droid.org/app/org.sufficientlysecure.keychain"><img src="{{ site.url }}/public/images/fdroid.png" /></a>
<a href="https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain"><img src="{{ site.url }}/public/images/google_play.png" /></a></p>
</div>

\- Vincent and Dominik
