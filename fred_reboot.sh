#/bin/bash
source /home/ubuntu/fred_scripts/fred_kill.sh &
sleep 5
echo "fred dead"
source /home/ubuntu/fred_scripts/init_ros.sh 

