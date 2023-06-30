#!/bin/bash


source /opt/ros/noetic/setup.bash&&source ~/catkin_ws/devel/setup.bash&&cd /home/ubuntu/fred_scripts&&roslaunch ROS.launch &


cd&&cd fred_web_interface&&python3 servidor.py

