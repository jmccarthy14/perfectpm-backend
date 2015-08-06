#!/bin/bash
echo "\n\nAdding orgs..."
./createOrg.sh "Big Bad Co"
./createOrg.sh "yellowsellr"

echo "\nAdding users..."
./createUser.sh John Smith jsmith
./createUser.sh Rachel Chelms rchelmsy
./createUser.sh Josh Ballerina jballz

echo "\nCreating projects..."
./createProject.sh "John's First Project" 1 1 "No ideas"
./createProject.sh "Rachel's Schedule" 2 1 "Empty"
./createProject.sh "Josh's Workday" 3 2 "Rage"

echo "\nMaking tasks..."
./createTask.sh "John's task" "He needs to do something" 4 1
./createTask.sh "Rachel's cleanup" "Tech debts" 8 3

echo  "\nPopulating org projects..."
./addProjectToOrg.sh 1 2
./addProjectToOrg.sh 3 1
./addProjectToOrg.sh 2 2

echo "\nHydrating projects with tasks..."
./addTaskToProject.sh 1 1
./addTaskToProject.sh 1 3

echo "\nAdding users to orgs..."
./addUserToOrg.sh 3 2
./addUserToOrg.sh 2 2
./addUserToOrg.sh 1 1
