---
title: "OpenPGP Considerations, Part III: Autocrypt and Encryption by Default"
layout: post
author: valodim
---

(This is a cross-post from [K-9 Mail Blog](https://k9mail.github.io/2018/02/26/OpenPGP-Considerations-Part-III-Autocrypt.html))

This blog post is the third in my series on design decisions made in the OpenPGP support in K-9 Mail.
Following my first post [on signed-only mails](https://k9mail.github.io/2016/11/24/OpenPGP-Considerations-Part-I.html), and the second one [on encrypted-only mails](https://k9mail.github.io/2017/01/30/OpenPGP-Considerations-Part-II.html).
This one focuses on Autocrypt, and in particular "encryption by default".

### Autocrypt Support and UI Improvements

In K-9 Mail version 5.400, OpenPGP encryption was changed to adhere to the [Autocrypt](https://autocrypt.org) specification.
Most importantly, keys are now transparently exchanged between compatible clients, paving the way for truly transparent key management with no need for user interaction.

<img src="/assets/img/crypto-states.png" alt="K-9 Mail Crypto States" style="float: right; padding-left: 30px;" />

Another big change happened in the user interface:
In message view display of crypto status has been greatly simplified - either a message was securely encrypted (green lock), encrypted with problems (grey lock with an X), or hasn't been encrypted at all (grey struck-through lock).
The warning overlays that were previously displayed when a message was deemed insecure are also gone; Those messages now simply don't get a green lock.

The most important changes, I think, have been made to message composition.
Firstly, the crypto dialog is no more, encryption can instead be enabled or disabled with a single click on the lock.
The "three lock states" are also gone, recipients either can be encrypted to (small lock) or they can't (no lock).
If all recipients have verified keys in OpenKeychain, this will still be indicated by three green dots next to the lock, but generally the key status is featured much less prominently than before.

### Consensual Encryption by Default

All of the changes mentioned above work towards getting out of the user's way with the crypto as much as possible.
In keeping with this idea, **non-consensual encryption by default has been removed as a feature**.
I realize this breaks the workflows of a couple of users, for which I apologize.
However, I believe that this is the only way forward for usable e-mail encryption.
Please bear with me and read on for an explanation.

Before K-9 Mail 5.400, encryption using OpenPGP was enabled "opportunistically", which meant that whenever end-to-end keys were available, the message would automatically be encrypted.
Since K-9 Mail 5.400, encryption will be enabled in exactly these three scenarios:
1. When the user chooses to encrypt (with a single click).
2. When replying to an encrypted mail.
3. When the user, *and all recipients*, enabled "Autocrypt mutual mode".

The reason for this change is that encrypting e-mail messages is not strictly an improvement:
Encrypted messages cannot be viewed in all clients and especially web clients, full-text search is typically restricted, and if the user loses access to their keys there might be unintended loss of messages.
Most e-mail apps also rely on plugins for encryption, which is always going to be less neatly integrated than first-party support.
In short, the increase in confidentiality comes at a cost in compatibility, availability, and convenience.

Now, encryption of e-mail has so far been a very deliberate act - to be able to encrypt to anyone, the user would have to somehow manually obtain the key and import it in their key management app.
In addition to that, extremely few people would even have keys, because dealing with encryption plugins is a pain.
But between contacts who have Autocrypt-capable clients, making encryption available as an option will hopefully *just work*.
This is super great, but it weirdly brings up a problem:

<img src="/assets/img/autocrypt-mutual.png" alt="Autocrypt Mutual Mode" style="float: right; padding-left: 30px;" />

Many people have an appreciation for encrypting `secret.doc` or `invoice.pdf` when they send it - but that appreciation doesn't extend to all messages.
If someone installs an Autocrypt-capable OpenPGP extension so they can securely send or receive `secret.doc`, this *should not* be interpreted as consent that any message sent to them, regardless of importance, may as well be encrypted.
Autocrypt wants to move on from traditional OpenPGP as a niche product.
To do that, it has to be possible to use an Autocrypt-capable client for e-mail that signals *availability* of encryption, but doesn't lead to an increasing number of messages in the mailbox with the compatibility issues that encryption currently incurs.
If we want to target a wider audience, we need to take the user experience of all users into consideration, which clashes with the availability of an option to non-consensually encrypt by default.

This brings us back to the three scenarios listed above.
In each of them, there is a clear responsibility for the choice to encrypt:
1. In the first scenario, a user takes immediate responsibility that an individual message is encrypted.
2. Slightly less immediately, replies in an encrypted thread will also be encrypted.
3. And the third scenario is consensus between users who not only have a key, but also signal that it's ok to encrypt to them by default.

Users who feel like they can reliably handle encrypted mail are encouraged to enable "Autocrypt mutual mode" (available in K-9 Mail 5.500).
If we ever get to a point where encrypted e-mails actually work seamlessly, perhaps this mode can be enabled by default.
For everyone else, making encryption available by choice with a single click and transparent key management should hopefully be a huge improvement.
