# Sep 24
## File Descriptor
- an integer that represents a resource that is open on the system


## Commands
`jobs` - list processes running in the background of the current shell

```bash
xeyes &
jobs
```

## User Space vs Kernel Space
user space - processes not the kernel
kernel space - when the kernel is running

### Kernel Mode
- no restrictions for the cpu

### User Mode
- heavy restrictions for the cpu


## What Controls Processes?
- processes alone can't do anything
- almost everything useful is kernel mode
    - memory allocation
    - file reading
    - keyboard reading
    - etc...
- processes must request the kernel do something via system calls


## Managing Processes
- when a system starts, the kernel initializes a few of its own activities as processes
- it then launches a program called `init`
- `init` launches a few shell scripts that then runs other initialization scripts
- launches daemon programs as well

*NOTE* This means that a process is able to spawn other processes

- processes are assigned pids
- init always gets pid 1, because processes get ids in ascending order

```bash
ps          - snapshot of process information
top         - continuous stream of process information
pstree      - gives us a tree of the processes (shows relationships)
kill -9 pid - force kills a process (without consent)

exec -a "/sbin/getty 38400 tty7" evil_cmd.py

shutdown now
reboot

lsof -u username
lsof -u^username
lsof -i TCP:22          - ssh connections
lsof -i 4               - ipv6
lsof -i 6               - ipv4
lsof -i -u^root

kill -9 $(lsof -t -u username) - kill all processes for username user indescriminately
kill -9 `lsof -t -u username`


# find top 10 largest files
# du -sk ~/Desktop/* | sort -r -n | head -10
```
