#!/bin/bash
curl -X POST --data @user.json -H "Content-Type: application/json" localhost:3333/users
