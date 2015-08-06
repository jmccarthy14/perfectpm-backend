#!/bin/bash
if [ -z "$1" ] 
then 
	TNAME="Jeff"
else
	TNAME=$(printf %q "$1")
fi
if [ -z "$2" ] 
then 
	TDESCRIPT="Bamford"
else
	TDESCRIPT=$(printf %q "$2")
fi
if [ -z "$3" ] 
then
	TESTIMATE=6
else
	TESTIMATE=$3
fi
if [ -z "$4" ] 
then 
	TCREATEDBYUSERID=1
else
	TCREATEDBYUSERID=$4
fi
sed "s/TNAME/$TNAME/g" ./task.json | sed "s/TDESCRIPT/$TDESCRIPT/g" | sed 's/TESTIMATE/'$TESTIMATE'/g' | sed 's/TCREATEDBYUSERID/'$TCREATEDBYUSERID'/g' > ./.task.tmp.json

curl -X POST --data @.task.tmp.json -H "Content-Type: application/json" localhost:3333/tasks
rm .task.tmp.json
