#!/bin/bash
if [ -n "$1" ]; then
	sed 's/TFIRST/'$1'/g' ./user.json > ./.user.tmp.json
	if [ -n "$2" ]; then
		sed 's/TLAST/'$2'/g' ./.user.tmp.json > ./.user.tmp2.json
		if [ -n "$3" ]; then
			sed 's/TEMAIL/'$3'/g' ./.user.tmp2.json > ./.user.tmp.json
		fi
	fi
fi
curl -X POST --data @.user.tmp.json -H "Content-Type: application/json" localhost:3333/users
rm .user.tmp*
