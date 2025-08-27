# Aug 27

## Schedule
- Work with VM
- Assignment 1

## Topics
##### **[Commands](commands.md#whereis)** - whereis
##### **[Commands](commands.md#ip)** - ip, shutdown
##### **[Bash](bash.md#path)** - $PATH
##### **[Network](network.md#loopback)** - loopback

### VM
- Virtual box network
- Snapshots
- Guest additions
- Shared folders

### Linux
- Shared clipboard
- Updating linux
- Linux terminal
- IP Address Info

> [!NOTE]
> Talked about the PATH


## Shared Folders
`Folder Path` - Directory path on your host
`Folder Name` - Name of the shared folder
`Mount Point` - Where we can see this shared folder when in the guest
- select `auto-mount` and `Machine-permanent`


### Setup the guest additions permissions
```bash
sudo vi /etc/group
# vboxsf:x:985:riley
# vboxdrmipc:x:984:riley
```

### Snapshots
- A fragmented system that virtual box uses to save your virtual machine's state
- Just ***don't***
