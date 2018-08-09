#!/bin/bash 

desc=`date "+%Y-%m-%d %H:%M:%S"`;

echo "start.."
git pull
git add -A > /dev/null 2>&1

if [ $? -eq 0 ]; then
git commit -m "update time $desc" 
fi

if [ $? -eq 0 ];

then
git push origin master > /dev/null 2>&1

	echo "Done!"
	exit 0
else 
	echo "no change made!"
	exit 1
fi
