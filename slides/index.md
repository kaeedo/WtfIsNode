- title : WTF is Node.js
- description : A guide for .Net and Java developers
- author : Kai Ito
- theme : night
- transition : default

***

<br /><br /><br /><br />

## WTF is Node.js
### A guide for .Net and Java developers

<br /><br /><br />

* Kai Ito
* https://www.xing.com/profile/Kai_Ito/
* https://github.com/kaeedo/WtfIsNode

' Little bit about me

***

### What is Node.js

* Javascript runtime for the server

---

### Any questions?

***

### What is Node.js

* Javascript runtime for the server
* Initial release May 2009
* Utilizes Chrome V8 Javascript engine
* Now belongs to The Node.js Foundation
* Open Source

---

### Installation and Versions

* Node.js vs IO.js
* Current Stable version is 12.1.0 (April 29, 2019)
* Use Node Version Manager

---

### Topics in this talk

* Event Loop
* Ecosystem
* What does Node.js offer that other runtimes don't

' We are not going to talk about Javascript as a language, but only Node.js as a runtime

***

### Event Loop

* Perhaps most important part of Node.js
* Single threaded
* Everything is asynchronous

---

### Get event loop picture

---

### Event-driven programming

* Non-Blocking I/O
* Any function performing I/O must use a callback
* Mainly used for Web Servers and I/O heavy services

' Not suitable for CPU intensive tasks

---

### libuv

* Low level library that enabled the event loop
* Fixed size thread pool
* The main thread sends tasks to thread pool
* Upon completion, informs main thread to execute callback

---

### Scaling

* No thread context switch
* Suitable for I/O operation
* CPU bound tasks are slow
* Only horizontal scaling
  * There are modules that allow for multi-threaded operation
