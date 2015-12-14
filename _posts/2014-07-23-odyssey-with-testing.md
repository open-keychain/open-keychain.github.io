---
layout: post
title: Our Odyssey with Testing on Android
---

As part of my Google Summer of Code proposal, I am currently working on adding
unit tests to OpenKeychain for crypto-related code. Gradle comes with built-in
JUnit support so this should not be a problem - or so I thought. Two days into
fiddling with the buildfiles while skimming the net for working examples, I
still had no working solution and the reasons for that are deeply rooted in
Android's new, Gradle-based build system.

We have a working build with tests at this point, but it took a long time to
get there and there are a number of imperfections and caveats left.


Testing with Gradle
-------------------

To build an Android project with Gradle, the android plugin must be used in
position of the usual `java` plugin. These two plugins are, understandably,
incompatible and that also means we can't use any plugin which builds on the
`java` one. The fundamental difference between the plugins is that the output
of the `java` one is a jar, while the output of android is an apk file.  Since
Gradle's JUnit support is part of the java plugin, we can't make use of it, and
would instead have to rely on test support in the android plugin.  The [android
plugin documentation] states this on the matter:

> Building a test application is integrated into the application project. There
> is no need for a separate test project anymore.

Sounds nice? It would be, but the test classes are also built *as an apk*,
which can then be tested in the emulator or directly on a connected device over
adb. Now this makes a lot of sense since it is Android code after all, but one
OpenKeychain build cycle is already 20+ seconds on my machine, running the
tests on my Nexus 4 would definitely move that to a point where test-driven
development becomes impossible. On top of that, I took great care to isolate my
crypto classes from android specific code where possible, which means running
the tests on-device is nothing but unnecessary overhead. And this is still Java
code - we should be able to simply run it on any JVM!

This is not an unknown problem, in fact there is an established solution: The
[Robolectric] library does some class loader magic to replace native android
classes with dummy implementations in plain Java, so tests can be run in a
regular JVM - just what we need. The big problem lies in the build files: Our
testing code must be run as JUnit tests. This is not supported by the android
plugin itself, so we need extra support.

The First Approach
------------------

The first candidate to pop up on a Google search on this matter is Jake
Wharton's [gradle-android-test-plugin], which adds locally run JUnit tests to a
regular Android project. This plugin is deprecated though, as plainly stated in
the readme: "Don't use this. I have neither the time nor energy nor desire to
maintain. Bug the tools team for proper unit test support." I understand that
providing support for running Android code on non-android JVMs is not a simple
matter for the Android developers, and this is probably a "if we can't do it
right, we don't do it at all" decision. It is still annoying as heck. Jake
elaborates on this in his Blog, saying that [Android Needs A Simulator, Not An
Emulator].

So despite its deprecatedness, I got the tests themselves to work with this
plugin. However, Android Studio would not properly recognize the test source
files as such, which means most of its IDE features don't work. [Workarounds
exist] for this huge drawback, but those are volatile and depend on Android
Studio internals since they directly inject the dependency in Android Studio's
generated `.iml` files.  I got it to work, but an Android Studio update a few
days later broke it again for me. Not a good solution. One contributor started
writing test code in a `testsupport` package in the main source set because he
had IDE support there, which was an ugly solution as well. What's more, we
don't get to use plugins which build on top of the java plugin's test
implementation, like [jacoco] and [coveralls] test coverage support.

So I went back to looking for a different solution.

The Current Setup
-----------------

After some back and forth, we are currently using the variant suggested in
nenick's excellent [android-gradle-template]. This one puts tests in their own
subproject which uses the regular java plugin, pulling in the main project's
source code as a dependency. This way, the android plugin issues mentioned
above are sidestepped, Android Studio (with a little extra motivation)
recognizes the source files, and we even get jacoco goodness with no extra
effort.

That said, this is not a perfect solution. The plugin responsible for including
the android project's source files into the test is a fork of the above
mentioned `gradle-android-test-plugin`, and of that plugin a snapshot is
required which is not yet in the maven repositories. This is solved by
supplying a bash script which installs a copy of the plugin's git master into
the mavenLocal repository - a bad solution, especially for Windows users.

As a further complication, our unit tests can't be run using Oracle's JDK.  The
reason for this is our use of [SpongyCastle] as a crypto provider, which is not
an Oracle certified JCE provider and hence the Oracle JVM refuses to load it.
This is again bad for developers who work on Windows, where OpenJDK is not
popular. At least this one is nobody's fault.

Because of these inconveniences, we simply don't include tests in our default
build setup. They are run in Travis so pull requests on Github benefit from
them, and for Linux developers they are just one `./prepare-tests` away, after
which everything works as intended. This is not a great solution, but workable.
Here's hoping that this will still be true after the next Android Studio
release - or that we finally get either direct JDK unit test support in the
android gradle plugin, or at least a reasonable simulator.


\- Valodim


[Robolectric]: http://robolectric.org/
[android plugin documentation]: http://tools.android.com/tech-docs/new-build-system/user-guide#TOC-Testing
[gradle-android-test-plugin]: http://github.com/JakeWharton/gradle-android-test-plugin
[android-gradle-template]: https://github.com/nenick/android-gradle-template/
[jacoco]: http://www.eclemma.org/jacoco/
[coveralls]: https://github.com/kt3k/coveralls-gradle-plugin
[workarounds exist]: https://groups.google.com/forum/#!msg/adt-dev/v0AluPBcoy0/KXR7oOmRQZIJ
[Android Needs A Simulator, Not An Emulator]: http://jakewharton.com/android-needs-a-simulator/
[spongycastle]: http://rtyley.github.io/spongycastle/
