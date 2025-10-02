# Exam
## Things to write about
- bash                          : a shell that allows for talking securely to the kernel
- users
- groups
- permissions
- sudo
- setfacl
- filesystem
- linux distributions
    - kernel + operating system + software repository
- package management


# Bash
Bash is a program on a linux system that is categorized as a shell. Shell
programs are responsible for providing a way for users to request work to be
done from the kernel. Importantly it is just a program, which means it has its
own code that controls its behavior. Internally there is a loop that waits for
input from the user, parses that input, then asks the kernel to try to launch a
program. On top of that it manages input and output redirection/piping.

# Users
On linux systems, users play a key role. Each user will get its own home
direcory. A user's home directory represents where all of that user's files are
located. Things like the desktop, documents, and pictures directories live
there. More importantly though users also play a key role in the linux permission
system.

# Groups
Groups are a way to group users into a permissions category. So if you need to
give many people the same access to a resource, you can put the users into a
group. Then this group is the thing you apply permissions to.

# Permissions
There are a few permissions systems built into Linux. One is a more basic system
that works via chmod, where each file has read/write/execute flags for
owner/group/other.

# Sudo
Sudo is a command present on most linux distributions that allows users to run
commands as a different user. The most common way this command is used is to run
commands as the super user (aka root). This is useful because some commands
require elevated permissions to run properly, and using sudo is both a safer and
more convenient. Because your access to the system is so great in super user
mode, it's easy to accidentally do something that can break stuff.

# Setfacl
Setfacl is one of two commands that control file access control lists. This is
the more fine grained method mentioned earlier. This allows an admin to give
user1 different permission to a file than user2 to the same file. FACLs also
allow for giving entire groups these permissions to specific files. The benefit
of this is that an admin can put 100 users into a single group, and apply
permissions to that entire group. This way all the users in that group inherit
the permissions.

`setfacl -m g:name:rwx <dir>`

# Filesystem
The filesystem is a data structure that maps data on a physical hard
disk/ssd to a more user friendly tree format. The linux file system has a root
with subdirectories. To note though, the layout of the data on the disk does not
necessarily follow the same tree format in which its displayed.

# Distributions
A linux distribution represents a system that includes a kernel, software
repositories, a package manager, and a set of default software.

# Package Management
