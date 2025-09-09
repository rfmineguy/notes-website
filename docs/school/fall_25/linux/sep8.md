# Sep 8
## Topics
Linux Distributions
Linux Filesystem
Managing Installed Software

## Review
Textbook Sections: 1-6,9
Review man pages for getfacl, setfacl, and sudo


## Linux
What is required to run linux?
- kernel            (some code that represents our system)
- bootloader        (loads the kernel into memory to start running)
- file system       (filesystem driver, and the software for interacting with a hard drive)
- init system       (loading initial processes)
- user space        (system applications, applications that should have less control than kernel space)

### BIOS
Bare minimum requisite software for initializing your hardware, the loads a kernel
If you buy a OEM laptop the bios could have **malware**


### Post
Power on self test



```
POST -> BIOS -> MBR -> Bootloader -> initrd image -> Virtual root FS -> linuxrc
                                \ -> Kernel                          <- /
                                      \ -> Mount root FS -> Init processes -> System daemons
```

### Debian
Debian is the linux kernel + everything else

Its a distribution that makes decisions on what should be pre installed and pre configuration

#### Study tip
- What is a linux distribution?
- How is it different than the kernel?
- What software do different distros have pre installed?
- Could be define a custom distro?

## Linux Distribution
- An operating system made from a software collection based on the linux kernel, often through a package management solution.
- Generally comprises a linux kernel, gnu tools, additional software, documentation, windowing system, window manager, and desktop environment

### Gnu
`gnu` - gnu is not unix<br>
`gnu tools` - a collection of free and open source software
- gnu tools are ripoffs of proprietary unix tools
 
### Package Manager
- handles dependency and version management of software
- references a particular repository
- package management is great, but its only as good as the repository
- heirarchy of dependencies that can be reused between different software

### Ubuntu Repos
| Repo       | Description                                     |
| --         | --                                              |
| Main       | FOSS                                            |
| Universe   | Community maintained                            |
| Restricted | Proprietary device drivers (Licensing problems) |


## The Linux Filesystem
```
/
  usr/
    bin/
    lib/
    local/
      bin/
      lib/
      man/
  bin/
  etc/
  tmp/
  home/
    /you
    /someoneelse
```

`/proc` - kernel datastructures (memory, network, etc)
`/root` - home for the root account
`/sbin` - admin programs
`/usr/lib` - library files
`/var/log` - logging directory
etc...
