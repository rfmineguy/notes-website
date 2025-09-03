# Sep 3
## Topics
##### **[Commands](commands.md#ls)** - ls
##### **[Commands](commands.md#cd)** - cd
##### **[Commands](commands.md#pwd)** - pwd
##### **[Commands](commands.md#mkdir)** - mkdir
##### **[Commands](commands.md#touch)** - touch
##### **[Commands](commands.md#rm)** - rm/rmdir
##### **[Commands](commands.md#mv)** - mv

## Shell (Bash)
A program that captures keystrokes and passes the commands to the kernel


## Pipe
```bash
ls /tmp | grep somepattern
```
- pipe allows you to feed output of one command into the input of the next

## Redirect
```bash
ls /tmp > output.txt    # clear and write new data
cat output.txt

ls /tmp >> output.txt   # append the new data
```


## Permissions
- Everything is a file in linux.
- Files have permissions.
- Thus we can control who is allowed to access what.

```bash
$ ls
-rw-r--r--@  1 rileyfischer  staff    278 Aug 26 09:34 package.json

$ chown root:rileyfischer package.json
chown: changing ownership of 'pacakge.json': Operation not permitted

# We can't associate this file with two groups
# No shared permissions here
# No seperate permission for different groups
# Solution? file access control lists
```

## File Access Control Lists
```bash
man getfactl
man setfactl
```


## Perms
```bash
-rw-r--r--@  1 rileyfischer  staff    278 Aug 26 09:34 package.json
```

- `-rw` : Root
- `-r-` : Owner
- `-r-` : Other
