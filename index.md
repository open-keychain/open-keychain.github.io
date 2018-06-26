---
layout: default
title: OpenKeychain
---

<section>
<div>

<div style="float: right;">
<p style="width:130px;margin-left:auto;margin-right:auto;margin-bottom:0px">
<a href="https://twitter.com/OpenKeychain">
<img src="{{site.baseurl}}/public/images/twitter-512.png" width="30" height="30" style="margin-bottom:0px;" />
</a>
<a href="https://f-droid.org/app/org.sufficientlysecure.keychain"><img style="margin-bottom:0px" src="{{ site.url }}/public/images/fdroid.png" width="129" height="45" /></a>
<a href="https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain"><img style="margin-bottom:0px" src="{{ site.url }}/public/images/google_play.png" width="129" height="45" /></a>
</p>
<p><img src="{{ site.url }}/public/images/screen1.png" /></p>
</div>

<div>
<script src="{{site.baseurl}}/public/js/jquery/2.0.2/jquery.min.js"></script>

OpenKeychain helps you communicate more privately and securely. It uses encryption to ensure that your messages can be read only by the people you send them to, others can send you messages that only you can read, and these messages can be digitally signed so the people getting them are sure who sent them. OpenKeychain is based on the well established OpenPGP standard making encryption compatible across your devices and systems. For a list of compatible software for Windows, Mac OS, and other operating systems consult <a href="http://openpgp.org/software/">http://openpgp.org/software/</a>.

Modern encryption is based on digital “keys”. OpenKeychain stores and manages your keys, and those of the people you communicate with, on your Android smartphone. It also helps you find others’ keys online, and exchange keys. But its most frequent use is in using those keys to encrypt and decrypt messages.
<p>
<ul>
<li><b>Donate via 
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;business=android%40schuermann.eu&amp;lc=US&amp;item_name=OpenKeychain+Donation&amp;no_note=0&amp;no_shipping=1&amp;currency_code=EUR">PayPal</a> / <a href="https://flattr.com/submit/auto?fid=4vzg0p&amp;url=https%3A%2F%2Fwww.openkeychain.org">Flattr</a> / <a href="" data-toggle="modal" data-target="#bitcoin-donation-overlay">Bitcoin</a></b></li>
</ul>
</p>
</div>


### Open Source

Open Source: OpenKeychain is designed to be trustworthy. It’s Free Software with no secrets; anyone can examine and validate every bit of it (Source code available at [GitHub](https://github.com/open-keychain/open-keychain))

### Integration

OpenKeychain primarily integrates with [K-9 Mail](https://k9mail.github.io/) to provide end-to-end encryption capabilities.

Besides this several other apps use OpenKeychain's interface for encryption.
We are not actively participating in the development of each of these third-party apps.
No security audits have been done by us and, thus, we cannot provide any security guarantees.

If you are an app developer, consider using the [OpenPGP API](https://github.com/open-keychain/openpgp-api) in your application.

| App                                                                 | Description                                                             | Install                                                                                                                                             | Open Source |
|:------------------------------------------------------------------- |:----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------:|:--- |
| [K-9 Mail](https://k9mail.github.io/)                               | Best open source email client for Android                               | [Play](https://play.google.com/store/apps/details?id=com.fsck.k9), [F-Droid](https://f-droid.org/app/com.fsck.k9)                                   | ✓ |
| [Conversations](https://conversations.im/)                          | Jabber/XMPP client with OpenPGP support                                 | [Play](https://play.google.com/store/apps/details?id=eu.siacs.conversations), [F-Droid](https://f-droid.org/app/eu.siacs.conversations)             | ✓ |
| [Password Store](https://github.com/zeapo/Android-Password-Store)   | Password manager compatible with ["pass"](http://www.passwordstore.org) | [Play](https://play.google.com/store/apps/details?id=com.zeapo.pwdstore), [F-Droid](https://f-droid.org/repository/browse/?fdid=com.zeapo.pwdstore) | ✓ |
| [Oversec](http://www.oversec.io/)                                   | Transparently encrypts and decrypts any text in any app.                | [Play](https://play.google.com/store/apps/details?id=io.oversec.one)                                                                                |   |
| [PGPClipper](https://github.com/Mnkai/PGPClipper)                   | PGPClipper integrates with the clipboard to decrypt PGP messages        | [Play](https://play.google.com/store/apps/details?id=moe.minori.pgpclipper), [F-Droid](https://f-droid.org/app/moe.minori.pgpclipper)               | ✓ |
| [andOTP](https://github.com/flocke/andOTP)                          | OTP generator with backups in OpenPGP format                            | [Play](https://play.google.com/store/apps/details?id=org.shadowice.flocke.andotp), [F-Droid](https://f-droid.org/packages/org.shadowice.flocke.andotp/)                                                                                                   | ✓ |
| [oandbackup](https://github.com/jensstein/oandbackup)               | Backup apps encrypted via OpenPGP                                       | [F-Droid](https://f-droid.org/app/dk.jens.backup)                                                                                                   | ✓ |
| [PGPAuth](https://github.com/LittleFox94/PGPAuth)                   | Send OpenPGP-signed requests to a server                                | [Play](https://play.google.com/store/apps/details?id=org.lf_net.pgpunlocker), [F-Droid](https://f-droid.org/app/org.lf_net.pgpunlocker)             | ✓ |
| [PGP ID](https://play.google.com/store/apps/details?id=se.rtek.rid) | Authenticate at supported online services securely                      | [Play](https://play.google.com/store/apps/details?id=se.rtek.rid)                                                                                   |   |


### Independent Security Audit

The auditing company Cure53 performed an intensive security audit of OpenKeychain. The security experts summarize their final result with “[...] none of the spotted issues were considered to be of a critical severity in terms of security implications. The latter is a significant and impressive result for an app of this complexity and relevance.”

### Permissions

Because OpenKeychain is Free Software, anyone can validate that the permissions are indeed only required for the listed features.

  * In-app purchases: Donate to the developers
  * Identity: Pre-fill name and email addresses
  * Contacts: Connect keys to your contacts (only offline)
  * Photos/Media/Files: Import/export keys from SD card
  * Camera: Scan QR Codes to add other people's keys
  * Others: Internet permission to retrieve keys, NFC permission to use YubiKeys

Starting with Android 6, permissions are requested when required in-app!