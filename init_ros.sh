#!/bin/bash

cd fred_scripts&&roslaunch ROS_sim.launch &

cd&&cd fred_web_interface&&python3 servidor.py
