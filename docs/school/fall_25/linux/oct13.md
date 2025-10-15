# Oct 13
## Init
Many init processes have "near root" permissions, but the services these spawn do not necessarily have root permission.

## Least Priviledge
When deciding what permissions to give a file or folder, consider what the smallest amount of permissions you can give it

## Bash
### Sed
```bash
sed 's/unix/linux' somefile.txt       # replaces first instance of 'unix' with 'linux'
sed 's/unix/linux/g' somefile.txt     # replaces all instances of 'unix' with 'linux'

cat somefile.txt | sed 's/unix/linux/'  # pipes the stream 'somefile.txt' to sed
cat somefile.txt | sed 's/unix/linux/2' # replaces the second occurence
```

### Tr
```bash
cat words.txt | tr "[a-z]" "[A-Z]"
```

### Diff
```bash
$ cp words.txt words2.txt
$ echo "last" >> words2.txt
$ diff words.txt words2.txt
5a6
> last
```

### Cmp
```bash
# compares two files byte by byte
#  shows differences
$ cmp file1.txt file2.txt
```

### Read
```bash
read_file() {
  read filename
  for word in $(IFS=' '; cat filename) do
    echo $word
  done
}
```
