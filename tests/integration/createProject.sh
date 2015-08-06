#!/bin/bash
if [ -z "$1" ]
then
	TNAME="Worthless Tasks"
else
	TNAME=$(printf %q "$1")
fi
if [ -z "$2" ]
then
	TCREATEDBYUSERID=1
else
	TCREATEDBYUSERID=$2
fi

if [ -z "$3" ]
then
	TORGID=1
else
	TORGID=$3
fi

if [ -z "$4" ]
then
	TDESCRIPT="You don't care"
else
	TDESCRIPT=$(printf %q "$4")
fi

sed "s/TNAME/$TNAME/g" ./project.json | sed 's/TCREATEDBYUSERID/'$TCREATEDBYUSERID'/g' | sed 's/TORGID/'$TORGID'/g' | sed "s/TDESCRIPT/$TDESCRIPT/g" > ./.project.tmp.json
curl -X POST --data @.project.tmp.json -H "Content-Type: application/json" localhost:3333/projects
rm ./.project.tmp.json
