Demonstration of bull multiple job listeners on the same job
============================================================

This repository contains a full demonstration that as of Bull 1.0 
correctly locks individual jobs despite having multiple listeners.

How to Run
==========

Start 4 terminals. In terminal 1-3

    node processor.js

In terminal 4, add the job

    node job.js 
