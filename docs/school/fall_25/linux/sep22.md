# Sep 22
## Filesystems
- Abstraction representing stored data
- Underlying representation isn't actually layed out as a tree
- Sort of standardized, but we can't fully guaruntee that all applications are going to abide by the standards

### Proc
This directory is a place where the kernel expresses interfaces to itself
It is a **virtual file system** (it pretends to contain a set of files)
It contains representations of kernel data structures

## Filesystems New
- What is on the hard drive? (abstractly vs literally)
- Linux allows access to devices through a file abstraction
- Linux allows access to data on the hard drive through a file abstraction
    - We don't have to manually reassembly blocks of data
- Is a Mitsubishi drive different from a Western Digital drive?
- Does a physical hard drive have an API?

**Effecively a filesystem is a device driver**
- allows for encoding data on a physical device without knowing specific details
- what type of features do file system drivers offer?
- what type of features do we want in our file system?
    - able to shut down in the middle of a write without losing data.

## Journaling
- this type of FS keeps a journal or log of the changes made to the filesystem during write that is used to reconstruct corruptions that may occur due to events such as a crash or power cutoff.
- this idea is akin to how git handles changes
- `xfs` is a journaling filesystem


## Commands
`df -h`
- check disk free space in human readable format


## Creating new fs
- mkfs on a device partition
- mount a device partition to a filesystem location
- `/etc/fstab` is used to tell linux where to mount each drive device
- `mount /dev/sdb1 /path/to/location`
- `umount /dev/sdb1`

**NOTE: Errors in the /etc/fstab will cause the system to hang at boot**

# Review
Review the `/proc` filesystem
