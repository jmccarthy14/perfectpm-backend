#!/bin/bash
curl -X POST --data @org.json -H "Content-Type: application/json" localhost:3333/orgs
