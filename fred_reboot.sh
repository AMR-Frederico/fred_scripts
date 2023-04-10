#/bin/bash
sudo killall roslaunch
sudo killall python3
sleep 15
echo "Reseting" &
source /opt/ros/noetic/setup.bash&&source ~/catkin_ws/devel/setup.bash&&cd /home/ubuntu/fred_scripts&&roslaunch ROS.launch &
sleep 2 &
cd&&cd fred_web_interface&&python3 servidor.py
