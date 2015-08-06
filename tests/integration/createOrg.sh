#!/bin/bash
# TODO: Refactor this to be correct form
if [ -z "$1" ]
then 
	TNAME="Megacorp"
else
	TNAME=$(printf %q "$1")
fi

sed "s/TNAME/$TNAME/g" ./org.json > ./.org.tmp.json
curl -X POST --data @.org.tmp.json -H "Content-Type: application/json" localhost:3333/orgs
rm ./.org.tmp.json
