# Commands
## su
`su` is a command that transitions to root priviledge

## apropos
`apropos` is a command that searches your system's `man` pages

### Usage
`apropos <topic>`

### Example
```bash
# search the man pages for things relating to 'networking'
apropos networking

# search the man pages for things relating to 'users'
apropos users
```

## uname
`uname` is a command that gives you infomation about the system

## whereis
`whereis` is a command that shows you where an executable is located on the disk

### Example
```bash
# show me where the sudo command is
whereis sudo
```

## ip
`ip` is a command that gives you information about the network connection

### Example
```bash
# outputs information about the ip address
ip addr
```

## shutdown
`shutdown` is a command that lets you shutdown the pc

### Example
```bash
shutdown -h now
```

## ls
`ls` lists files in the current directory

### Example
```bash
ls
ls -a       # shows hidden files
ls -la      # shows hidden files with more information about them
...
```

## cd
`cd` is a bash `builtin` that changes directory

## pwd
`pwd` is a program that outputs the current directory path

## mkdir
`mkdir` is a program that creates a new directory in the pwd

## touch
`touch` is a program that updates file timestamps (useful for file backups)
- as a side effect if the file doesn't exist, it will create it

### Example
```bash
touch filename     # creates file with name 'filename' in pwd
touch a.txt        # creates file with name 'a.txt' in pwd
```

## rm
`rm` is a program that deletes a file

### Example
```bash
rm filename
```

## rmdir
`rmdir` is a program that deletes a folder

## mv
`mv` can be used to move a file to a new location or to rename a file

### Example
```bash
mv <path> <newpath>
```

## grep
`grep` prints lines that match patterns. It acts as a filter

### Example
```bash
ls | grep "pattern"   # first example of a unix pipe
```
