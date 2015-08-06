#!/bin/bash
if [ -z $2 ]
then
	ORGID=1
else
	ORGID=$2
fi

if [ -z $1 ]
then
	USERID=1
else
	USERID=$1
fi

curl -X POST localhost:3333/orgs/$ORGID/users/$USERID
