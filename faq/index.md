---
layout: page
title: FAQ
---
[//]: # (NOTE: Please put every sentence in its own line, Transifex puts every line in its own translation field!)

* Will be replaced with the ToC
{:toc}

# Frequently Asked Questions

## Are my secret keys safe on my mobile device?

This is a very common question, and it's not an easy one. In the end it comes down to how much you trust your mobile device.
The real question usually isn't, "how safe are they", but rather "are they less safe than on my laptop"? The answer depends on three factors:

 1. Do you trust the hardware? Obviously, there are no guarantees that the vendor of your phone hardware didn't add some kind of backdoor.
    Then again, the same applies to your laptop's hardware, so it's about even.
 2. How easily can the device be stolen? This depends a lot on how careful you are, but this too is probably about even with your laptop.
 3. Do you trust the software? The Android operating system actually offers a lot more in the way of security between applications than desktop operating systems.
    No app without root privileges besides OpenKeychain can ever access the keys stored in OpenKeychain's database.
    By comparison, any program you run on your computer can just upload your gnupg keyring, if those files belong to the same user.
    As long as Android as a platform is trustworthy, your keys are safe from malware apps.

In conclusion, we believe that secret keys are not notably less safe on your mobile than they would be on your laptop.
If your security requirements are high enough that you don't keep your keys on your laptop, you probably shouldn't put them on your mobile either.
Otherwise, they should be fine.

## How to import an OpenKeychain backup with gpg?
 1. Make a backup from OpenKeychain and transfer it to your computer via email
    or a cloud provider, like Dropbox. This is safe because OpenKeychain
    backups are encrypted with Advanced Encryption Standard (AES) using
    securely generated Backup Codes.
 2. On your PC, execute the following line:

    ```
    # replace 'backup_YYYY-MM-DD.pgp' with the name of your backup file
    gpg --decrypt backup_YYYY-MM-DD.pgp | gpg --import
    ```

 3. Enter the full Backup Code including the dashes, e.g., "1234-5678-9012-3456-7890-1234-5678-9012-3456"

## What is the best way to transfer my own key to OpenKeychain?

Short answer:

```
# generate a strong random password
gpg --armor --gen-random 1 20

# encrypt key, use password above when asked
gpg --armor --export-secret-keys YOUREMAILADDRESS | gpg --armor --symmetric --output mykey.sec.asc
```

Longer answer:

You should make sure that your key can't be intercepted during transfer.  If you have an SD-Card reader in your phone, you can use this to easily transfer your key.
If you don't, you can transfer your key through an online service (such as E-Mail, Dropbox, …), but **make sure to encrypt it** during transfer!

To transfer your key to OpenKeychain from `gpg`, the best way to do so is to encrypt it with a single-use password, which you never use anywhere else and never send online. Use `gpg` as shown above to generate a random password, then export and encrypt your key with it.

Once the key is encrypted, transfer the file to your mobile using any method, decrypt the file with OpenKeychain. When asked, manually (!) input the password.

**Do not use a weak password!** This method is only safe if the password you use is very strong (like 20 random, alphanumeric characters), and humans are really bad at generating random strings.  Use `gpg` as shown above, or another random password generator of your choice.

**Do not use an online password generator!** This beats the purpose of using a generated password in the first place! An attacker who can get the file from your Dropbox account, can likely also see the Website you got the password from!


## Should I confirm a key without manually comparing fingerprints?

To confirm someone's key, you should make sure that it's really that same key the other person wants you to confirm with their name on it.

Since keys are usually obtained from a keyserver, it is necessary to double-check that the keyserver gave you the correct key.
This is traditionally done by manually comparing the key's entire fingerprint, character by character.

However, scanning a QR code, receiving a key via NFC, or exchanging keys via SafeSlinger all have that same check already built-in, so as long as you trust the method used for key exchange, there is no reason to check the fingerprint again manually.

## Can I mark other keys as trusted, without confirming them with my own key?

This is not a supported use case. You can, however, simply create a new key which you use for this purpose only, which will essentially be the same thing.

## I see no suitable option in the app selection menu when trying to open a local file, what's wrong?

You probably don't have any stand-alone file managers installed, like [OI File Manager](https://f-droid.org/repository/browse/?fdid=org.openintents.filemanager) or [Amaze](https://f-droid.org/repository/browse/?fdid=com.amaze.filemanager). OpenKeychain needs one in order to select files from local storage or SD card, such as for importing keys or encrypting/decrypting files.

# NFC Security Tokens

## What security tokens are recommended for OpenKeychain?

We currently recommend the [YubiKey NEO](https://www.yubico.com/products/yubikey-hardware/yubikey-neo/) (50 EUR). It supports USB and NFC.

## Are there other compatible tokens and more information?

We provide a table of currently supported hardware and advanced information on our [wiki page](https://github.com/open-keychain/open-keychain/wiki/Security-Tokens).

# Advanced Questions

## Why is OpenKeychain's database not password protected?

Your keys are already encrypted with their password - that's the reason you have to input it for every crypto operation.
There is no point in encrypting those keys again with another password, so password protecting the entire database would only protect the list of keys which are not yours.
If this is important to you, consider using [full disk encryption](https://source.android.com/devices/tech/security/encryption/).

## Why is my password requested when I backup my keys?

It is not required cryptographically, but prevents simple stealing of your keys.

## Everyone can delete my keys. Why is there no password request before?

Anyone who can physically access your device can simply delete the app data from Android OS.
Also, asking for a password before delete would prevent you from deleting keys where you forgot your password

## I have more than one subkey capable of signing. Which one is selected when signing with this OpenPGP key?

OpenKeychain assumes that OpenPGP keys hold one usable signing subkey only and selects the first non-revoked non-expired non-stripped one it finds in the unordered list of subkeys.
We consider having more than one valid signing subkey an advanced usecase. You can either strip subkeys that should not be used using OpenKeychain's edit key screen or explicitly select the right subkeys when exporting from gpg with ``gpg --export-secret-subkeys``.

## Where can I find more information about OpenKeychain's security model and design decisions?

Head over to our [Wiki](https://github.com/open-keychain/open-keychain/wiki).

# Known Issues

## A wrong primary user id is shown when searching on a Keyserver

Unfortunately, this is a bug in the SKS Keyserver software. Its machine-readable output returns the user ids in an arbitrary order. Read the [related bug](https://bitbucket.org/skskeyserver/sks-keyserver/issue/28/primary-uid-in-machine-readable-index) report for more information.

## Not working with AOSP Mail

For now, OpenKeychain will not support AOSP Mail due to bugs in AOSP which we cannot work around ([#290](https://github.com/open-keychain/open-keychain/issues/290)).

# Partners and Support

OpenKeychain is a project primarily driven by Dominik Schürmann and Vincent Breitmoser in their free time.
However, we were supported by these companies/donations:

  * Your donations
  * Google Summer of Code [2014](https://www.google-melange.com/archive/gsoc/2014/orgs/openpgp_keychain), [2015](https://www.google-melange.com/archive/gsoc/2015/orgs/openkeychain), and [2016](https://summerofcode.withgoogle.com/archive/2016/organizations/5672889575538688/) with 6 successful students
  * [Institute for Operating Systems and Computer Networks at TU Braunschweig](https://www.ibr.cs.tu-bs.de)
  * [Funding for one year to improve K-9 Mail support by Open Technology Fund](https://www.opentech.fund/project/k-9-mail)
  * Security audit sponsored by [Open Technology Fund](https://www.opentech.fund)
  * [Yubico's YubiKing price](https://www.openkeychain.org/yubiking)
  * Hacking week at [mailbox.org](https://mailbox.org) offices in Berlin together with K-9 Mail developers
