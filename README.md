# RVRCommitmentProject
This repository is for the advanced automation task titled 'Commitment Problems' that will be described in class on Monday, March 2.

The code in the main.js file is set up to demonstrate three functions that run on the Sphero RVR. Each function runs a single stage.

- Stage one: drive forward two floor tiles (160 cm) using a PID algorithm at a heading of 90 degrees. Note: This uses the y-coordinate of the robot as the setpoint.

- Stage two - make a 90 degree turn using Weinberg's hacky method that also happens to work really well.

- Stage three - drive forward one grid squares on the floor at a heading of 90 degrees. Note: this stage uses the x-coordinate of the robot as the setpoint.

Take a look at the code to get an idea of how each one works.

Your task is to plan a fourteen stage path on the floor of the IDEA center using a series of commands like these. 

One catch is that each of you must contribute three stages yourself as commits to this repository on a branch that you create yourself. You need to submit pull requests and deal with any conflicts in merging the code with the master branch. 

Another catch is that your stages should be submitted as issues on this repository, and as they are completed, closed by you (or me).

I will be syncing with this repository on my computer and pasting the code into the Sphero RVR software for testing purposes.
