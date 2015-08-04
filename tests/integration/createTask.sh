#!/bin/bash
curl -X POST --data @task.json -H "Content-Type: application/json" localhost:3333/tasks
