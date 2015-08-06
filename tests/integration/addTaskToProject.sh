#!/bin/bash
if [ -z $1 ]
then
	PROJID=1
else
	PROJID=$1
fi

if [ -z $2 ]
then
	TASKID=1
else
	TASKID=$2
fi

curl -X POST localhost:3333/projects/$PROJID/tasks/$TASKID
