#!/bin/bash
curl -X POST --data @project.json -H "Content-Type: application/json" localhost:3333/projects
