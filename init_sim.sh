#!/bin/bash
source /opt/ros/noetic/setup.bash&&source ~/catkin_ws/devel/setup.bash&&cd ~/fred_scripts&&roslaunch ROS_simulation.launch &
cd&&cd fred_web_interface&&python3 servidor.py &
echo run server 
sleep 2 &
coppelia ~/catkin_ws/src/fred_montagem/simulation/fred_simulation.ttt &
sleep 30 &
echo init coppelia 
sleep 10 
rostopic pub /joy/controler/connected std_msgs/Bool "data: true" &
rostopic pub /joy/controler/ps4/break std_msgs/Int16 "data: 1" &
rostopic pub /joy/controler/ps4/triangle std_msgs/Int16 "data: 1" &
echo run topics 