#!/bin/bash
if [ -z $1 ]
then
	ORGID=1
else
	ORGID=$1
fi

if [ -z $2 ]
then
	PROJID=1
else
	PROJID=$2
fi
curl -X POST localhost:3333/orgs/$ORGID/projects/$PROJID
