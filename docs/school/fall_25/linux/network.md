# Network
## Virtual Machine Adapaters
| Adapter Type | Traits                                                 |
| ------------ | ------                                                 |
| Bridged      | VM appears on network as normal computer               |
| ^^           | VM gets its own IP address                             |
| ^^           | Looks like a wired connection (ethernet)               |
| ^^           | Uses the same credentials as the host for the wifi     |
| NAT          | Creates a network bubble with no other hosts           |
| ^^           | Shares network access with real host                   |
| ^^           | Shares ip address with real host                       |
| NAT Network  | Allows multiple virtual machines to share a NAT bubble |
| ^^           | All vms would appear to have the same address          |


## Loopback
A self referential adapter

## ip command
```bash
$ ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute 
       valid_lft forever preferred_lft forever
2: enp0s8: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 08:00:27:cf:4d:04 brd ff:ff:ff:ff:ff:ff
    altname enx080027cf4d04
    inet 134.154.64.96/21 brd 134.154.71.255 scope global dynamic noprefixroute enp0s8
       valid_lft 1674sec preferred_lft 1674sec
    inet6 fe80::a00:27ff:fecf:4d04/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
```

- 1: lo is the local loopback adapter
- 2: enp0s8 is the network adapter for actual internet connection
  - 134.154.64.96 (Local IPv4 address)
  - fe80::a00:27ff:fecf:4d04 (Local IPv6 address)
