# Oct 1
## Sudo
*Super User Do*

```bash
$ sudo whoami
root

$ sudo !!
sudo sudo whoami

$ sudo -k                # clear saved password
$ sudo -v                # update timestamp
$ sudo -u someuser <cmd> # run <cmd> as a specific user

$ sudo -l                # list all of the allowed and forbidden command for this user
```

Sudo provides controlled access to other users.


### TIP
If you are doing something that could break access to root, leave a shell logged in as root, so it can fix the problem

```bash
sudo -i   # this will open a shell logged in as root
```

### Sudoers
This file contains a list of users allowed to use sudo

### visudo
- `visudo` is a program that allows us to edit the sudoers file
  - when you save with visudo, it will check to see if the change would break sudo

```
someuser ALL=(ALL) NOPASSWD:ALL                # allows this user to use sudo with no password
someuser ALL=(ALL) NOPASSWD: /bin/echo /bin/ls # allows this user to run echo and ls with no password
steguser ALL=(ALL) /usr/bin/steghide
%steggroup ALL=(ALL) /usr/bin/steghide         # allows this group to run /usr/bin/steghide with password

[username] [any-hostname]=([run-as-username]:[run-as-groupname]) [commands-allowed]
```

## SSH
*Secure Shell*
- the typical software package is `openssh`
- connectivity tool for remote login with the SSH protocol
- encrypts traffic to eliminate eavesdropping, connection hijacking, and other attacks
- provides tunneling capabilities, several auth methods, and complex configuration options

### Contains
- scp, sftp
- sshd, sftp-server, ssh-agent
- ssh-add, ssh-keysign, ssh-keyscan, ssh-keygen  (authentication)

`scp` is `secure copy`

### Client and Server
- ssh is the client
- sshd is the server
- listens on port 22 by default

### Connecting
```bash
ssh -p <port> <username>@<ip-address>
```
*Note: Most of the time we want port 22 (security by obscurity doesn't work)*

sshd blocks root access by default

### Asymetric Encryption
- public and private key
